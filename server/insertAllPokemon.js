var pok = require('../data/pokemon.json')
var Pokemon = require('../server/resources/pokemon/Pokemon.js')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(req,res) {




// var insertAllPokemon = function(num,name,data) {
	var poki = new Pokemon({num:num,name:name},data);
	console.log(poki)

	// for(var i = 0 ; i < pok.length ; i++ ){

	// 	var my_obj = pok[i].number,pok[i].name,pok[i].types,pok[i].imageUrl;

	// 	poki.save(function (err, poki) {
	// 		if (err) return console.error(err);
	// 		console.log(my_obj)
	// 	});

	// }

	// var save = function(err,data){


	};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
