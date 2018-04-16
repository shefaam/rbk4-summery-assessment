
var collection=db.collection('pokemon')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	// ishold do here for loob for the array in pokemon.json 
	collection.insert(pokemon,function(err,result){
		pokemon.equal(null,err)
	})
	pokemon.equal(result,null)


	mongoimport --db pokemon --collection restaurants --drop --file ~/data/pokemon.json


};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
