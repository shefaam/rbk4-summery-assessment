var pokemons = require('../data/pokemon.json')
var P = require('./Pokemon.js')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	console.log(pokemons)
var Pokemons = JSON.parse(pokemons)
for (var i = 0; i < Pokemons.length; i++) {
	pokemon = new P.Pokemon ({

	number : Pokemons[i].number,
	name   : Pokemons[i].name,
    types  : Pokemons[i].types,
	imageUrl: Pokemons[i].imageUrl,

	})
	P.Pokemon.save()
}

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
