var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'))
db.on('open',function(){
	console.log('connected to the database!')
})

module.exports = db;
