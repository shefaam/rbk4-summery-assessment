var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
mongoose.connect(mongoUri);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  
});


module.exports = db;
