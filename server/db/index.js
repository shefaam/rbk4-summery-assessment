var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';


mongoose.connect(mongoUri)
// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('opened!')
});

module.exports = db;  
