var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below

var app = express()
var port = 3000;
mongoose.connect('mongodb://localhost/pokemon')



app.listen(port, () => console.log('APPLICATION IS CURRENTLY LISTENING'))

module.exports = db;
