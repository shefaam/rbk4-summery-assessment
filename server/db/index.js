var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below

// to connect mongoose to our local DB
mongoose.connect(mongoUri);

var db;


module.exports = db;
