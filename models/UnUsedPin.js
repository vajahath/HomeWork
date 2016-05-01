var mongoose = require('mongoose');

var pin = {
	pins: Array
}

var pinSchema = mongoose.Schema(pin);

module.exports = mongoose.model('UnUsedPin', pinSchema);
