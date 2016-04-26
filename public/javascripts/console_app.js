var app = angular.module('homeWork_console', []);

app.controller('console_controller', [
	'$scope',
	'datastore',
	'charts',
	'dataStoreTest',
	'$http',
	function($scope, datastore, charts, dataStoreTest, $http) {

		$scope.data = datastore;
		charts.drawChart();

		$http.get('/apis/populateme')
			.then(function(response) {
				dataStoreTest = response.data;
			})
			.then(function() {
				console.log(dataStoreTest)
			});


	}
]);


//common datastore factory
app.factory('datastore', [function() {
	var data = {
		temperature: {
			inside: 20,
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
		partyMode: true,
		doors: {
			total: 3,
			closed: 1,
			list: [
				{ id: "test1", pin: 12, name: "front door", state: true, comment: "hello world" },
				{ id: "test2", pin: 12, name: "front door", state: false, comment: "hello world" },
				{ id: "test3", pin: 12, name: "front door", state: true, comment: "hello world" },
				{ id: "test4", pin: 12, name: "front door", state: true, comment: "hello world" },
				{ id: "test5", pin: 12, name: "front door", state: false, comment: "hello world" },
				{ id: "test6", pin: 12, name: "front door", state: true, comment: "hello world" }
			]
		},
		windows: {
			closed: 6,
			open: 3,
			list: [
				{ id: "testw1", name: "front window", state: true, comment: "hello world" },
				{ id: "testw2", name: "front window", state: true, comment: "hello world" },
				{ id: "testw3", name: "front window", state: true, comment: "hello world" },
				{ id: "testw4", name: "front window", state: false, comment: "hello world" },
				{ id: "testw5", name: "front window", state: true, comment: "hello world" },
				{ id: "testw6", name: "front window", state: false, comment: "hello world" }
			]
		},

		devices: {
			off: 13, //total
			on: 2, //total
			// list
			heavyDevice_list: [
				{ id: "htestd1", name: "A/c", state: true, comment: "hello world" },
				{ id: "htestd2", name: "Washing Machine", state: true, comment: "hello world" },
				{ id: "htestd3", name: "Refrigereator", state: true, comment: "hello world" },
				{ id: "htestd4", name: "Motor", state: true, comment: "hello world" },
			],

			lights_list: [
				{ id: "Ltest1", name: "front light", state: true, comment: "hello world" },
				{ id: "l2est1", name: "front light", state: true, comment: "hello world" },
				{ id: "l3test1", name: "front light", state: true, comment: "hello world" },
				{ id: "l4test1", name: "front light", state: true, comment: "hello world" }
			],

			fans_list: [
				{ id: "f1test1", name: "front fan", state: true, comment: "hello world" },
				{ id: "f2test1", name: "front fan", state: true, comment: "hello world" },
				{ id: "f3test1", name: "front fan", state: true, comment: "hello world" }
			]
		}


	};

	return data;
}]);
