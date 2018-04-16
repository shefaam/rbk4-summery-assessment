var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
mongoose.connect('mongodb://localhost/pokemon')

db.on('error',console.error.bind(console, 'connection errors:'))
db.once('open',function(){
	console.log('Connected')
})
// Connect Mongoose to our local MongoDB via URI specified above and export it below
// and register it with Mongoose as the Pokemon collection with the following properties:
//  number, a unique number
//  name, a unique string
//  types, an array of strings
//  imageUrl, a string

var db = mongoose.connection;


module.exports = db;
