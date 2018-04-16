
//console.log('im in')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	mongoimport --db pokemon --collection Pokemon --type json --file pokemon.json 
	// var pokemon=new Pokemon;
	// pokemon.save(function(err,pokemon){
	// 	if(err){
	// 		console,log('an error')
	// 	}

	// })
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
