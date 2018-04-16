var mongoose = require('mongoose');
// Complete the pokemonSchema below.
var Schema = mongoose.Schema;
var pokemonSchema = new Schema({
	number : Number,
	name : String,
	types : [],
	imageUrl : String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.module('Pokemon',pokemonSchema);


module.exports = Pokemon;
