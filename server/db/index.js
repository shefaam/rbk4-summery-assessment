var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = require ('../db/index.js');
var app = express()
mongoose.connect('mongodb://localhost/pokemon')

app.post('/', function(req, res){
	var data = req.body;
	// app.get()
	db.save(data, function(data,err){
		if ( err ){
			res.send( err )
			console.log( 'ERROR HAS BEEN DETECTED' )
		} else {
			re.send(data)
			console.log( 'DATA PASSED!' )
		}
	})
})

module.exports = db;
