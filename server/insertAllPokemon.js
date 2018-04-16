var ins=require('data/pokemon.json');
var add=require('./pokemon/pokemon.js')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(callback) {
ins.find(function(ree,pokemon){
	if(err){
		callback(err);
	}else{
		callback(pokemon)
	}
  })
};

add.save(function (err, data) {
    if (err){
console.log(err);
     }else{
console.log(data)
     }

  });

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
