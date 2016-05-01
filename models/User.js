var mongoose = require('mongoose');

var user = {
	name: String,
	email: {
		type: String,
		unique: true
	},
	psw: String,
	id: {
		type: String,
		unique: true
	}
}

var user_schema = mongoose.Schema(user, { collection: "User" });

module.exports = mongoose.model('User', user_schema);
