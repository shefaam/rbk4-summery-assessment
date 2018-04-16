var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
var db =mongoose.connection;
// Connect Mongoose to our local MongoDB via URI specified above and export it below



module.exports = db;
