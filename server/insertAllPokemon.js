import allPokemons from ('pokemon.json')


var bodyParser = require('body-parser')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	app.use(bodyParser.json()) //parsing all pokemons into body
	
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
