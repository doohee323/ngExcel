'use strict';

angular.module('ngGridApp', ['ngGrid'])
	.controller('MainCtrl', function($scope){
		$scope.ngExcelData = [{name: "Moroni", age: 50},
	                     {name: "Tiancum", age: 43},
	                     {name: "Jacob", age: 27},
	                     {name: "Nephi", age: 29},
	                     {name: "Enos", age: 34}];
		$scope.addContact = function(){
			$scope.ngExcelData.push({name:$scope.newName, contact:$scope.newContact});
		}
	})
	.directive('ngExcel', function($compile){
		return {
			template: "<div ng-grid=\"gridOptions\" ng-style=\"myprop()\" class=\"well\"></div>",
			restrict : "EA",
			controller : function($scope){
				$scope.gridOptions = {
			        data: 'ngExcelData',
			        multiSelect: false,  
			        enableCellSelection: true,
			        enableRowSelection: true,
			        enableSorting: true,
			        columnDefs: [
			        {field:'name', displayName:'name', enableCellEdit: true},
			        {field:'contact', displayName:'contact', enableCellEdit: true}
			        ],
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
				},true);
				// $compile(iEl.contents())(scope);
			}
		};
	});
