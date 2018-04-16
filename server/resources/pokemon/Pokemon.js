var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);
var db = mongoose.connection;

// Complete the pokemonSchema below.
var pokemonSchema = ({
  number : {type : Number , unique : true},
  name : {type : String , unique : true},
  types : [String],
  imageUrl : String
})

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

var save = function (data , callback) {
	var poke = Pokemon(data);
	poke.save(function(err , elem){
		if(err){callback(err , null)}
			callback(null , elem)
	})
}

module.exports.save = save;
module.exports.Pokemon = Pokemon;
