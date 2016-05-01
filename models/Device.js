var mongoose = require('mongoose');


var device = {

    };

/*
var device = {

	device:{
	        type: String,
	        unique:true
	        },
	pin: Number
	


};
*/

var deviceSchema = mongoose.Schema(device,{collection:"device"});

module.exports = mongoose.model('Device', deviceSchema);