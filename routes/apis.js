var express = require('express');
var q = require('q');
var router = express.Router();

router.get('/populateme', function(req, res) {
	

	res.send("hii");


});

function getAndProcessData(){
	// inital populate function.
};

function commitChange(){
	// dynamic responces...
};

module.exports = router;
