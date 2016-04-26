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
		water: {
			level: 60, // in percentage. Empty should be calculated as 100-x
			timeLeft: 20
		},
		rain: {
			chance: 60,
			status: "There can be rain"
		},
		inverter: {
			charge: 91,
			status: "Charging"
		},
		users_online: 2,
		partyMode: false,
		doors: {
			total: 3,
			closed: 1,
			list: {
				door1: true,
				door2: true
			}
		},
		windows: {
			closed: 6,
			open: 3,
			list: {
				window1: true,
				window2: true
			}
		},
		devices: {
			off: 13, //total
			on: 2, //total
			// list 
			ac: "ON",
			wash: "OFF",
			fridge: "ON",
			motor: "OFF",

			lights: {
				light1: "ON",
				light2: "OFF",
			},

			fans: {
				fan1: "ON",
				fan2: "OFF",
			}
		}


	}

	return data;
}]);
