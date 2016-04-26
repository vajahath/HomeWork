var test = require('../customLibs/pi_interface.js');

var express = require('express');

var User = require('../models/User');

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
	test.deviceStatus("fan",function(status){
		console.log(status);
	});
});

module.exports=router;