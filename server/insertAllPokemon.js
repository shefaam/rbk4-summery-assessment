

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var Pokemon = require("./resources/pokemon/Pokemon");
var allPokemonsData = require("../data/pokemon");
var db = require("./db");
//console.log(allPokemonsData);
var insertAllPokemon = function() 
{
	allPokemonsData.map(function(pokemonData)
	{
		var pokemon = new Pokemon(pokemonData);
		//console.log(pokemon);
		pokemon.save(function(err, data) 
		{
			// console.log("here");
			if (err)
			{
				console.log(err);
			}
			console.log("data saved " + data);
		});
	});
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
