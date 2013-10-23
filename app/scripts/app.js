'use strict';

angular.module('ngGridApp', ['ngGrid'])
	.controller('MainCtrl', function($scope){
	    $scope.cellValue;
	    var checkboxCellTemplate='<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected" /></div>';
		$scope.columnDefs = [
			        {field:'CHK', displayName:'chk', width: 50 , 
			            cellTemplate:checkboxCellTemplate,
			            sortable:false, pinned:false, enableCellEdit: false },
			        {field:'name', displayName:'name', width: 100, enableCellEdit: true},
			        {field:'contact', displayName:'contact', width: 300, enableCellEdit: true}
			        ];

		$scope.ngExcelData = [
						{CHK: "1", name: "Moroni", contact: '010-2241-9445'},
	                    {CHK: "0", name: "Tiancum", contact: '010-2241-9446'}
	                    ];
		$scope.addContact = function(){
			$scope.ngExcelData.push({name:$scope.newName, contact:$scope.newContact});
		}
	})
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
