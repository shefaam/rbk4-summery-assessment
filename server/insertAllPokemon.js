 var path = require('path');
 var express = require('express');
 var app =express();
;
var Pokemon = require('./resources/pokemon/Pokemon.js');
var request = require('request');
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	request(app.use( express.static(path.join(__dirname, '/../data/pokemon.json'))), function (error, response, body) {
  	var info = JSON.parse(body);
  	for (var i = 0; i < info.length; i++) {
  		Pokemon.save({info[i].number,info[i].name,info[i].types,info[i].imageUrl},function(err,data){
		if(err){
			response.send(err)
		}else{
			response.send(data)
		}
	});
  	}
});
	

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
