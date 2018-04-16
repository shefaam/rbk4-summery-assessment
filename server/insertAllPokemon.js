var pokemon = require('../pokemon/Pokemon.js');
var json = require('../data/Pokemon.json');


// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {

 pokemon.insertMany(json, function(error, data)){

  if(error){
   console.log("Error in inserting json file into MongoDB");
  } else {
   console.log("Success in inserting json file into MongoDB");
  }

 }

};


// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
