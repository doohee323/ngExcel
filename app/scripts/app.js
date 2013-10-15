'use strict';

angular.module('ngGridApp', ['ngGrid'])
	.controller('MainCtrl', function($scope){
		$scope.myData = [{name:'nurintmau', contact:'01093124732'}];
		$scope.gridOptions = {data:'myData'};

		$scope.addContact = function(){
			$scope.myData.push({name:$scope.newName, contact:$scope.newContact});
		}
	});


