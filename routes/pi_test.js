var express = require('express');
var Gpio = require('onoff').Gpio;
var router = express.Router();
var schedule = require('node-schedule');

router.get('/', function(req, res) {
	res.render("pi_test", {
		title: "testing in pi"
	});
	console.log("testing in pi");

	var schedule = require('node-schedule');
	var date = new Date(2016, 03, 27, 8, 6, 30);

	var j = schedule.scheduleJob(date, function() {
		console.log('The world is going to end today.');
	});
	//To test the created functions

	deviceOn("fan", function(status) {
		if (status.status == "OK") console.log("fan is turned on");
		else console.log("error in deviceOn function");
	});

	deviceOn("bulb", function(status) {
		if (status.status == "OK") console.log("bulb is turned on");
		else console.log("error in deviceOn function");
	});

	deviceStatus("fan", function(status) {
		console.log(status);
	});
	deviceStatus("bulb", function(status) {
		console.log(status);
	});
	deviceStatus("ac", function(status) {
		console.log(status);
	});
	deviceOff("bulb", function(status) {
		if (status.status == "OK") console.log("bulb is turned off");
		else console.log("error in deviceOn function");
	});
	deviceStatus("fan", function(status) {
		console.log("status of fan has been changed to ", status);
	});
});

router.get('/xxx', function(req, res) {

});

// ==========================================================
var device_id_mapping = {
	'fan': 17,
	'bulb': 27,
	'ac': 22
};


// function for getting status of devices
function deviceStatus(device, callback) {
	var device_id = new Gpio(device_id_mapping[device], 'both');
	var function_status = "OK";
	var status = {
		"pin_state": device_id.readSync(),
		"host": "pi",
		"status": function_status
	};

	callback(status);
}

// function to on a device
function deviceOn(device, callback) {
	var device_id = new Gpio(device_id_mapping[device], 'out');
	var function_status = "OK";
	device_id.writeSync(1);
	var status = {
		"status": function_status
	};
	callback(status);
}


// function to off a device
function deviceOff(device, callback) {

	var device_id = new Gpio(device_id_mapping[device], 'out');
	var function_status = "OK";
	device_id.writeSync(0);
	var status = {
		"status": function_status
	};
	callback(status);
}

module.exports = router;
