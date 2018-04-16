var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
mongoose.connect('mongodb://localhost/test')

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  // we're connected!
});

var PokemonSchema = mongoose.Schema({
  name: String
});

var Pokemon = mongoose.model('Pokemon', kittySchema);

var save = function("", callback){
	var Pokemon1= new Pokemon("dont know!");
	Pokemon1.save(function(err, Pokemon1){
		if (err){
		 callback(err)
		}
		callback(Pokemon1)
	})
}



module.exports = db;
