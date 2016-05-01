// require q lib
var q = require('q');

// function deininitions
function sayone(){
	var d = q.defer();

	// function that takes time to finish
	setTimeout(function(){
		console.log("sayone is called");
		
		// this is where you want to call the next function
		d.resolve();
	}, 5000);

	// return the promis
	return d.promise;
};

function saytwo(){
	var d = q.defer();

	setTimeout(function(){
		console.log("saytwo is called val = ");
		d.resolve();
	}, 1000);
	
	return d.promise;
};

function saythree(){
	var d = q.defer();

	setTimeout(function(){
		console.log("saythree is called");
		d.resolve();
	}, 3000);
	return d.promise;
};

function sayfour(){
	var d = q.defer();

	setTimeout(function(){
		console.log("sayfour is called");
		d.resolve();
	}, 2000);
	return d.promise;
};

// var d = q.defer();

sayone()
	.then(saytwo)
	.then(saythree)
	.then(sayfour);
//
// sayone();
// saytwo();
// saythree();
// sayfour();
@sanilkpch
