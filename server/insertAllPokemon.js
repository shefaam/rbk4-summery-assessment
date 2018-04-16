
var mongooseDB=require('./pokemon/Pokemon.js')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	var pokemonArr;

	for (var i = 0; i < pokemonArr.length; i++) {
		var pokemon=new mongooseDB.Pokemon({
			number:pokemonArr[i].number,
	 		name:pokemonArr[i].number,
	 		types: pokemonArr[i].types,
	 		imageUrl:pokemonArr[i].imageUrl
		})

		pokemon.save(function(err,pokemon){
			if(err){
				console.log(err)
			}else{
				console.log(pokemon)
			}
		})
	}
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
