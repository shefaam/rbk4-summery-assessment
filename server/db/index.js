var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
mongoose.connect(mongoUri);

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
db.on('err',function(){
	console.log("error")
})
db.on('open',function(){
	console.log('success')
})




module.exports = db;
