var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: "Login | HomeWork"
	});
});

router.get('/poll', function(req, res) {
	res.render('poll', {
		title: "Polling"
	});
});

module.exports = router;
