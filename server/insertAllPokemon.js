var json_data=require('../data/pokemon')
var Use_Schema=require('./resources/pokemon/Pokemon')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(Schema,call) {
	var inserte
	for (var i = 0; i < json_data.length; i++) {
		inserte = new Schema({
			number : json_data[i]['number'],
			name : json_data[i]['name'],
			types : json_data[i]['types'],,
			 : json_data[i]['imageUrl']	
	    })
	    call(inserte)
	}
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon(Use_Schema);
