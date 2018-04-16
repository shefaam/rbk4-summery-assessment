
var Pokemon = require('./resources/pokemon/Pokemon.js');
var request = require('request');
var jsonfile = require('jsonfile')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	var file = '../data/pokemon.json'
 
	

  	
	request(jsonfile.readFileSync(file), function (error, response, body) {
  	//var info = JSON.parse(body);
  	console.log(body)
  		Pokemon.save(body,function(err,data){
		if(err){
			response.send(err)
		}else{
			response.send(data)
		}
	});
  	
});
	

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
