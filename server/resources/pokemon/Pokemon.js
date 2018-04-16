var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = Pokemon Schema(){
number:Number,
name:String,
types:String,
imageUrl:String
};


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose module(Pokemon,pokemonSchema);
 
 var poke = new Pokemon;

module.exports = Pokemon;
