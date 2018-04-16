
var add=require('./pokemon/pokemon.js');
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
add.save(function (err, data) {
    if (err){
console.log(err);
     }else{
console.log(data)
     }

  });



module.exports = Pokemon;
