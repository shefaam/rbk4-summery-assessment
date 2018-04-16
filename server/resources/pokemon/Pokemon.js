var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = mongoose.Schema({
  number: Number,
  name: String,
  types: [],
  imageUr:String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon;


module.exports = Pokemon;
