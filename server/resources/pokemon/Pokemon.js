var mongoose = require('mongoose');
var path = require('path')

// Complete the pokemonSchema below.
var db= require(path.join(__dirname, '../../db')+'/index.js')

var pokemonSchema = mongoose.Schema({
	number:  {type: Number, index: { unique: true}},
	name: {type: String, index: { unique: true}},
	types: [String],
	imageUrl: String
})


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon =  mongoose.model("Pokemon", pokemonSchema);


module.exports.Pokemon = Pokemon;
