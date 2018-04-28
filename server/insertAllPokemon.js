const fs = require('fs');
var Pokemon = require('./resources/pokemon/Pokemon');

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database

var insertAllPokemon = function() {


fs.readFile('../data/pokemon.json', 'utf8', (err, data) => {
	var allpokemons=JSON.parse(data);
	

 
  // saved!
 for(var i=0;i<allpokemons.length;i++){

 	var pokemon=new Pokemon(allpokemons[i]);
console.log(pokemon)
Pokemon.create(allpokemons[i], function (err, pokemon) {
  if (err) console.log(err);
  // saved!
})

 }
	
})




};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
