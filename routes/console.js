var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('console', {
		title: "Console"
	});
});

router.get('/advanced', function(req, res) {
	res.render('adv-console', {
		title: "Advanced Console"
	});
});

module.exports = router;
