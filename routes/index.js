var express = require('express');

var test = require('../customLibs/device_mapping');
var pi_interface = require('../customLibs/pi_interface');
var Gpio= require('onoff').Gpio;
var User = require('../models/User');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.user) {
		res.redirect('/poll');
	} else {
		res.render('index', {
			title: "Login | HomeWork",
			err: ""
		});
	}
});

// handle auth
router.post('/', function(req, res) {

	// if both fields are present
	if (req.body.email && req.body.password && !req.session.user) {
		var credentials = {
			'email': req.body.email,
			'psw': req.body.password
		}

		User.findOne(credentials, function(err, found) {
			if (err) {
				console.log("something went wrong while trying to login!!", err);
			} else if (found) {
				// login success
				console.log(found);
				req.session.user = found;
				console.log(req.session.user.name);
				res.redirect('/poll');
			} else {
				console.log(found);
				res.render('index', {
					title: "Login | HomeWork",
					err: "invalid username - password combination"
				});
			}
		});

	}
});

// polling function
router.get('/poll', function(req, res) {
	res.render('poll', {
		title: "Polling"
	});
});


// logout fun
router.get('/logout', function(req, res) {
	req.session.destroy(function(err) {
		if (err) {
			console.log("somethin went wrong while signing out");
		} else {
			res.render('index', {
				title: "Login | HomeWork",
				err: ""
			});
		}
	})
});



router.get('/test', function(req, res){
	res.send("get device on");
	pi_interface.deviceOn("fan1", function(status) {
		if (status.status == "OK") console.log("fan is turned on");
		else console.log("error in deviceOn function");
	});
	
});


/*
router.get('/mock/getDeviceOn', function(req, res){
      res.send("get device on");
	pi_interface.deviceOn("fan", function(status) {
		if (status.status == "OK") console.log("fan is turned on");
		else console.log("error in deviceOn function");
	});
	
});
*/



router.get('/getDeviceStatus', function(req, res){
	res.send(pi_interface.deviceStatus("door1"));
	
});




router.get('/getDeviceOff', function(req, res){
    res.send("get device off");
	pi_interface.deviceOff("fan1", function(status) {
		if (status.status == "OK") console.log("fan is turned off");
		else console.log("error in deviceOn function");
	});
	

});

router.get('/iotest', function(req, res){
	io.emit('msg', "hi");
});

io.on('connection', function(socket){
	socket.on('msg', function(msg){
		console.log(msg);
	});
});
/*
router.get('/mock/removeDevice', function(req, res){
	 test.removeDevice("fan");
	
});
*/
http.listen(3000, function()
{
    console.log('listening on *:3000');
});



module.exports=router;