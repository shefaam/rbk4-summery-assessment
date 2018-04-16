var Pokemon = require('./resources/pokemon/Pokemon.js');
var data = require('./../data/pokemon.json');
var db = require('./db/index.js');
var fs=require('fs')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
fs.readFile('./../data/pokemon.json','utf8',function(err,data){
	//console.log(data);
	var parseddata=JSON.parse(data);
// console.log("hiiii",parseddata[0]);
	for (var i=0;i<parseddata.length;i++){
		var newPokemon=new Pokemon({
	     number:parseddata[i]["number"],
	     name:parseddata[i]["name"],
	     types:parseddata[i]["types"],
	     imageUrl:parseddata[i]["imageUrl"]

	})
		//console.log("pokemooooon",db.models.Pokemon)
	newPokemon.save(function(err,data){});
	}
})
}


// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
