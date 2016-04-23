var express = require('express');
var Gpio = require('onoff').Gpio;

var router = express.Router();


router.get('/', function(req, res) {
	res.send("testing in rp...");
	console.log("testing in pi");
	//To test the created functions
	deviceOn("fan");
	deviceOn("bulb");

	deviceStatus("fan", function(status) {
		console.log(status);
	});
	deviceStatus("bulb", function(status) {
		console.log(status);
	});
	deviceStatus("ac", function(status) {
		console.log(status);
	});
	deviceOff("fan");
	deviceStatus("fan", function(status) {
		console.log("status of fan has been changed to,"
			status);
	});
});

router.get('/xxx', function(req, res) {

});

// function for getting status of devices
function deviceStatus(device, callback) {
	var id = device_id_mapping.device;
	device_id = new Gpio(id, out);
	var function_status = "OK";
	var status = {
		"pin_state": device_id.readSync(),
		"host": "pi",
		"status": function_status
	};
	callback(status);
}

// function to on a device
function deviceOn(device) {
	var id = device_id_mapping.device;
	var device_id = new Gpio(id, out);
	device_id.writeSync(1);
	var status = {
		"status": function_status
	};
	return status;
}

// function to off a device
function deviceOff(device) {
	var id = device_id_mapping.device;
	var device_id = new Gpio(id, out);
	device_id.writeSync(0);
	var status = {
		"status": function_status
	};
	return status;

}

module.exports = router;


var device_id_mapping = {
	'fan': 17,
	'bulb': 27,
	'ac': 22
};
