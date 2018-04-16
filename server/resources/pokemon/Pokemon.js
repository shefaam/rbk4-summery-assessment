var mongoose = require('mongoose');
var db = require('./../../db/index.js');
// Complete the pokemonSchema below.

var pokemonSchema=new mongoose.Schema({
	number:{type: Number,index: true,unique: true},
	name:{type: String,index: true,unique: true},
	types:[String],
	imageUrl:String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;
