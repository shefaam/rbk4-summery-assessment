var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongoUri = 'mongodb://localhost:27017/pokemon';
mongoose.createConnection(mongoUri);
// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});
module.exports = db;
