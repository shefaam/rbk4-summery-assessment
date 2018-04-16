var mongoose = require('mongoose');
var db = require('../../db');
// Complete the pokemonSchema below.

var pokemonSchema = mongoose.Schema({
	number: {type: Number, index: {unique: true} },
	name: {type: String, index: {unique: true}},
	types: [String],
	imageUrl: String,
});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

// var test = new Pokemon({number:2,name:'test2',types:['test1','test2'],imageUrl:'testUrl'})
// console.log(test)
// test.save()
module.exports = Pokemon;
