var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
mongoose.connect('mongodb://localhost/poke');

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;

var save = function(err,data) {
		if(err) {
			return console.log(err)
		} else {
			send(data)
		}
}

var	find = function(err,data) {
		if (err) {
			return console.log(err);
		} else {
			console.log(data)
		}
	}
module.exports = db;
