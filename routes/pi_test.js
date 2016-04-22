var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.send("testing in rp...");
	console.log("testing in pi");

	console.log(device_id_mapping.fan);
	detectDevice("fan"); //calls function detectDevice
});

router.get('/xxx', function(req, res) {

});

// function for getting status of devices
function deviceStatus(device) {
	var id = device_id_mapping.device;
	device_id = new Gpio(id, out);
	var status = device_id.readSync();
}

// function to on a device
function deviceOn(device) {
	var id = device_id_mapping.device;
	var device_id = new Gpio(id, out);
	device_id.writeSync(1);

// function to off a device
function deviceOff(device) {
	var id = device_id_mapping.device;
	var device_id = new Gpio(id, out);
	device_id.writeSync(0);

}

module.exports = router;


var device_id_mapping = {
	'fan': 17,
	'bulb': 12
};
