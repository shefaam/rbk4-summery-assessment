import "./pokemon.json";
var pok = require("./pokemon.js");

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(arr) {

	
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();


//first : import the data from the pokemon.js which is an array of objects
// then iterate the array and insert every element in the array into the mongoodb