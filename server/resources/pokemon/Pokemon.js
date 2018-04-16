var mongoose = require('mongoose');
// Complete the pokemonSchema below.

// - [ ] Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
//   - [ ] `number`, a unique number
//   - [ ] `name`, a unique string
//   - [ ] `types`, an array of strings
//   - [ ] `imageUrl`, a string

 var pokemonSchema = mongoose.Schema({
  number: {type:Number, unique: true},
  name: {type:String, unique: true},
  types: [String],
  imageUrl: String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.model('Pokemon', pokemonSchema);


module.exports = Pokemon;
