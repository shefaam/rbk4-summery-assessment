
var mongoose = require('mongoose');

var Pokemon=require('./resources/pokemon/Pokemon.js')
var fs=require('fs')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	fs.readFile('/home/belal/Desktop/rbk4-summery-assessment/data/pokemon.json',function(error,stringData){
		if(error){
			console.log(error)
		}else{
			// console.log(stringData)
	var pokemonArr=JSON.parse(stringData);
			// console.log(pokemonArr)

	for (var i = 0; i < pokemonArr.length; i++) {
		var pokemon=new Pokemon({
			number:pokemonArr[i].number,
	 		name:pokemonArr[i].number,
	 		types: pokemonArr[i].types,
	 		imageUrl:pokemonArr[i].imageUrl
		})

		Pokemon.save(pokemon)
		// pokemon.save(function(err,pokemon){
		// 	if(err){
		// 		console.log(err)
		// 	}else{
		// 		console.log(pokemon)
		// 	}
		// })
	}
		}
	})


};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
