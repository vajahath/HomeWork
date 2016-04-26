var sqlite3 = require('sqlite3').verbose();

// create database
db = new sqlite3.Database('homeworkdb');

db.serialize(function() {

	// create login_data table inside homeworkDB
	db.run("CREATE TABLE login_data(id INT,email TEXT,password TEXT)");

	var stm = db.prepare("INSERT INTO login_data VALUES(?,?)");
	for (var i = 1; i < 11; i++) {
		stm.run(i, "testing..");
	}
	stm.finalize();
	db.each("SELECT id,info FROM test", function(error, row) {
		console.log(row.id + ":" + row.info);
	});
});
db.close();
