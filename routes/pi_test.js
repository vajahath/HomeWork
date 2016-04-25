var express = require('express');
var Gpio = require('onoff').Gpio;

var router = express.Router();


router.get('/', function(req, res) {
	res.render("pi_test", {
		title: "testing in pi"
	});
	console.log("testing in pi");
	//To test the created functions

	
	deviceOn("fan", function(status) {
		if (status.status == "OK") console.log("bulb turned on");
		else console.log("error in deviceOn function");
	});

	// deviceOn("bulb", function(status) {
	// 	if (status.status == "OK") console.log("fan is turned on");
	// 	else console.log("error in deviceOn function");
	// });

	// deviceStatus("fan", function(status) {
	// 	console.log(status);
	// });
	// deviceStatus("bulb", function(status) {
	// 	console.log(status);
	// });
	// deviceStatus("ac", function(status) {
	// 	console.log(status);
	// });
	// deviceOff("fan", function(status) {
	// 	if (status.status == "OK") console.log("fan is turned off");
	// 	else console.log("error in deviceOn function");
	// });
	// deviceStatus("fan", function(status) {
	// 	console.log("status of fan has been changed to ", status);
	// });
});

router.get('/xxx', function(req, res) {

});

// ==========================================================
var device_id_mapping = {
	'fan': 17,
	'bulb': 27,
	'ac': 22
};

function detectDeviceId(device,callback){
	var id=device_id_mapping.device;
	callback(id);
}
// function for getting status of devices
function deviceStatus(device, callback) {
	detectDeviceId(device,function(id){
		device_id = new Gpio(id, 'out');
		var function_status = "OK";
		var status = {
		"pin_state": device_id.readSync(),
		"host": "pi",
		"status": function_status
		};
	});
	
	callback(status);
}

// function to on a device
function deviceOn(device, callback) {
	detectDeviceId(device,function(id){
		//var device_id = new Gpio(id, 'out');
		var function_status = "OK";
		// device_id.writeSync(1);
		var status = {
		"status": function_status
	};	
	});
	callback(status);
}



// function to off a device
function deviceOff(device) {
	detectDeviceId(device,function(id){
		var device_id = new Gpio(id, 'out');
		var function_status = "OK";
		device_id.writeSync(0);
		var status = {
			"status": function_status
		};
	});
	callback(status);
}

module.exports = router;
