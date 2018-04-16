var db1 = require('./resources/pokemon/Pokemon.js');
var data = require('../data/pokemon.json');
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	for(var i = 0 ; i < data.length ; i++){
		var pokemonObj = {
			number: data[i].number,
			name: data[i].name,
			types: data[i].types,
			imageUrl: data[i].imageUrl
		}
		var item = new db1(pokemonObj);
		item.save(function (err, save) {
			if (err) {
				console.log("there is error saving");
			} else {
				console.log('saved');
			}
		});
	}
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
