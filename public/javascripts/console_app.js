var app = angular.module('homeWork_console', []);

app.controller('console_controller', [
	'$scope',
	'datastore',
	'charts',
	function($scope, datastore, charts) {

		$scope.data = datastore;
		charts.drawChart();

	}
]);


//common datastore factory
app.factory('datastore', [function() {
	var data = {
		temperature: {
			inside: 22,
			outside: 30,
			string: "Normal temperature inside."
		},
		doors: {
			total: 3,
			closed: 1
		},
		windows: {
			closed: 6,
			open: 3
		},
		water: {
			level: 60, // in percentage. Empty should be calculated as 100-x
			timeLeft: 20
		},
		devices: {
			off: 13,
			on: 2
		},
		rain:{
			chance: 60%,
			status:"There can be rain"
		}
	}

	return data;
}]);
