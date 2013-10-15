'use strict';

angular.module('ngGridApp', ['ngGrid'])
	.controller('MainCtrl', function($scope){
		$scope.myData = [];
		//$scope.gridOptions = { data:'myData'};

		$scope.addContact = function(){
			$scope.myData.push({name:$scope.newName, contact:$scope.newContact});
		}
	}).directive('ngExcel',function(){
		console.log('test');
		return {
			template: "<div ng-grid=\"ngExcelIntData\"></div>",
			restrict : "EA",
			scope: {
				ngExcelData : "="
			},
			controller : function($scope){
				//$scope.myData = [{name:'nurintmau', contact:'01093124732'}];
				$scope.ngExcelIntData = {data:'ngExcelData'};
			},
			link : function($scope, iEl,iAt,ctrl){
				$scope.$watch('ngExcelData',function(newData){
					console.log(newData);
				},true);

			}
		};
	});
