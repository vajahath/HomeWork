var express = require('express');
var router = express.Router();

// require player
// var Player = require('player');

/* GET home page. */
router.get('/', function(req, res) {
	// res.render('play', {
	// 	title: "Play | HomeWork"
	// });
});

// create player instance
// var player = new Player('http://mr4.douban.com/blablablabla/p1949332.mp3');

// play now and callback when playend
// player.play(function(err, player){
//   console.log('playend!');
// });


module.exports = router;
