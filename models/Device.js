var mongoose = require('mongoose');

var device = {
	device:{
	        type: String,
	        unique:true
	        },
	pin: Number
	
};

var deviceSchema = mongoose.Schema(device);

module.exports = mongoose.model('Device', deviceSchema);