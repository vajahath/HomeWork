var Gpio= require('onoff').Gpio;
var device_id_mapping= require('./device_mapping.js');

var gpio_export = {

	deviceStatus:function(device,callback){
	var device_id = new Gpio(device_id_mapping[device], 'both');
	var function_status = "OK";
	var status = {
		"pin_state": device_id.readSync(),
		"host": "pi",
		"status": function_status
	};
	callback(status);
	
	},
	deviceOn:function(device, callback){
	var device_id = new Gpio(device_id_mapping[device], 'out');
	var function_status = "OK";
	device_id.writeSync(1);
	var status = {
		"status": function_status
	};	
	callback(status);
	
	},
	deviceOff:function(device,callback) {
	
	var device_id = new Gpio(device_id_mapping[device], 'out');
	var function_status = "OK";
	device_id.writeSync(0);
	var status = {
		"status": function_status
		};
	callback(status);
	
	}

};

module.exports = gpio_export;