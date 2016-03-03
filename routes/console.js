var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('console', {
		title: "Console"
	});
});

module.exports = router;
