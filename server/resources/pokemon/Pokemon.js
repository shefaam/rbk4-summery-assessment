var mongoose = require('mongoose');
// Complete the pokemonSchema below.
var db = require('../db/index.js');

var pokemonSchema = mongoose.Schema({
  number: Number,
  name: String,
  // types: String,
  imageUrl: String
  
});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.


var Pokemon = mongoose.model('Pokemon', pockemonSchema);
db.save(function(data,callback){
var pokemon = new Pokemon(data)
pokemon.save(function(err,pokemondata){
	if(err){
		callback(err,null)
	}else{
		callback(null,pokemondata)
	}
})

})


module.exports.Pokemon = Pokemon;
//pokemon not defined!
//cant request or response  becuase of that!



// Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
//   - [ ] `number`, a unique number
//   - [ ] `name`, a unique string
//   - [ ] `types`, an array of strings
//   - [ ] `imageUrl`, a string