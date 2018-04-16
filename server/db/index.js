var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below

/*var db=connect(mongoUri);*/
var db = mongoose.createConnection(mongoUri);

module.exports = db;
