var mongoose = require('mongoose');
var data = require('../data/pokemon.json');
var pokemonSchema = require('./resources/pokemon/Pokemon.js')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	//console.log('hi',data[0])
	//console.log('hello')
for(var i=0; i<data.length ; i++){
	var pokemon = new pokemonSchema.Pokemon({number:data[i].number,name:data[i].name,types:data[i].types,imageUrl:data[i].imageUrl})
		pokemon.save(function(err,pokemon){
			if (err) console.log('error')
				//console.log(pokemon)

		})
		//console.log(pokemon)
		//var promise = pokemon.save();

		// pokemonSchema.save(data[i],function(x){
		// 	console.log(x)
		}
	}
	//console.log('hi')


// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
