var db = require('./pokemon/Pokemon.js');
var pokemons = require('../data/pokemon.json')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	for (var i = 0; i < pokemons.length; i++) {
		var obj={
			number: pokemons[i].number,
			name: pokemons[i].name,
			types: pokemons[i].types,
			imageUrl: pokemons[i].imageUrl
		}

		var pokemon = new Pokemon(obj);
	db.pokemon.save(obj,function(err,data){
		if(err){
			console.log(err)
		}
		console.log('hello',data)
	})//am not sure if this the right, i will be back.
}

};
// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
 