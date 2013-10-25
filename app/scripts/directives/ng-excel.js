'use strict';

angular.module('ngGridApp')
	.directive('ngExcel', function($compile){
		return {
			template: "<div ng-grid=\"gridOptions\" ng-style=\"myprop()\"></div>",
			restrict : "EA",
			controller : function($scope){
				$scope.gridOptions = {
			        data: 'ngExcelData',
			        multiSelect: false,  
			        enableCellSelection: true,
			        enableRowSelection: true,
			        enableSorting: true,
			        columnDefs: 'columnDefs',
			        selectedItems: []
			    };
			},
			link : function(scope, element, attr, ctrl){
				scope.gridOptions.attr = attr;
				scope.$watch('ngExcelData', function(newData){
					scope.myprop = function() {
						var attr = scope.gridOptions.attr;
						if(attr) {
				            return {
				                width: attr["width"] + 'px',
				                height: attr["height"] + 'px'
				            };
						} else {
							return {};
						}
			        };
					console.log(newData);
				}, true);
			}
		};
	});