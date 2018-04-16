var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);
//have promise property
mongoose.Promise = global.Promise;
//db equal the data base when connect
var db = mongoose.connection;
//db on conncet console .log error
db.on('error', console.error.bind(console, 'mongoUri connection error:'));


module.exports = db;
