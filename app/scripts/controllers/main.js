'use strict';

app.controller('MainCtrl', function($scope){
	  console.log('-------------');
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
	});
