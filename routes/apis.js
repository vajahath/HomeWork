var express = require('express');

var pi = require('../customLibs/pi_interface');

var router = express.Router();

router.get('/populateme', function(req, res) {
	res.send(deepDig(initializeSense()));
});


var deviceList = {
	doors: ['door1', 'door2'],
	windows: ['window1', 'window2'],
	heavyDevice: ['ac', 'washing', 'refrigereator', 'motor'],
	lights: ['light1', 'light2'],
	fans: ['fan1']
}


function initializeSense() {

	var data = {
		temperature: {
			inside: 30,
			outside: 34,
		},
		water: {
			level: 50,
		},
		rain: {
			chance: 80,
		}
		inverter: {
			charge: 95,
			status: "Charging"
		},
		users_online: 3,
		partyMode: false,
		doors: {
			total: 2
		},
		windows: {
			total: 2
		},
		devices: {
			heavyDevice_num: 4,
			lights_num: 2,
			fans_num: 1
		}
	}
	return data;
};

// derive logic from available data.
function deepDig(raw) {
	raw.temperature.string = getLogicString('temperature', raw.temperature.inside);
	raw.water.timeLeft = getLogicString('water', raw.water.level);
	raw.rain.status = getLogicString('rain', raw.rain.chance);

	// doors
	for (var i = 0; i < raw.doors.total; i++) {
		raw.doors.list[i] = {
			id: deviceList.doors[i],
			name: 'doors',
			state: pi.deviceStatus(deviceList.doors[i]).pinState
		}
	};

	// windows
	for (var i = 0; i < raw.windows.total; i++) {
		raw.windows.list[i] = {
			id: deviceList.windows[i],
			name: 'windows',
			state: pi.deviceStatus(deviceList.windows[i]).pinState
		}
	};

	// heavy devices
	for (var i = 0; i < raw.devices.heavyDevice_num; i++) {
		raw.heavyDevice.list[i] = {
			id: deviceList.heavyDevice[i],
			name: 'heavyDevice',
			state: pi.deviceStatus(deviceList.heavyDevice[i]).pinState
		}
	};

	// light list
	for (var i = 0; i < raw.devices.lights_num; i++) {
		raw.lights.list[i] = {
			id: deviceList.lights[i],
			name: 'lights',
			state: pi.deviceStatus(deviceList.lights[i]).pinState
		}
	};

	// fans list
	for (var i = 0; i < raw.devices.fans_num; i++) {
		raw.fans.list[i] = {
			id: deviceList.fans[i],
			name: 'fans',
			state: pi.deviceStatus(deviceList.fans[i]).pinState
		}
	};

	return raw;

};

function getLogicString(subject, value) {
	switch (value) {
		// handle temperature
		case 'temperature':
			switch (true) {
				case value < 10:
					return "extremely cold";
					break;
				case 10 <= value < 20:
					return "cold";
					break;
				case 20 <= value < 28:
					return "nice environment";
					break;
				case 28 <= value < 33:
					return "its getting hot";
					break;
				case 33 <= value < 38:
					return "very hot, drink more water";
					break;
				case value > 38:
					return "very hot.. Drink 200 ml water every hour."
					break;
			}
			break;

			// handle water
		case 'water':
			return "22 hours left";
			break;

			// handle rain
		case 'rain':
			switch (true) {
				case value < 50:
					return "there will not be any rain";
					break;
				case value > 50:
					return "there are possibilities of rain";
					break;
			}
	}
};

module.exports = router;
