var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
/* START SOLUTION */
var db = mongoose.connect(mongoUri);
/* ELSE
var db;
END SOLUTION */

module.exports = db;
