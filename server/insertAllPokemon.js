var db = require('./db/index')
var Pokemon = require('./resources/pokemon/Pokemon')
var fs = require('fs');
var array = JSON.parse((fs.readFileSync('../data/pokemon.json', 'utf8')));

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	for(var i = 0; i < array.length; i++) {
    (function (pokemon) {
   
                    var pokemons = new Pokemon({
					    number: array[i].number,
					    name: array[i].name,
					    types: array[i].types,
					    imageUrl: array[i].imageUrl
					});  
     
                    pokemons.save(function(err) {});
     
    })(array[i]);
}
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
