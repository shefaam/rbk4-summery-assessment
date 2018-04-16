var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
//var db = require('./db');
var Pokemon = require('./resources/pokemon/Pokemon.js');

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database

var insertAllPokemon = function() {
	var data = fs.readFileSync('/Users/rbk14/Desktop/rbk4-summery-assessment/data/pokemon.json') ;
	var pokemons = JSON.parse(data)

	for(var i = 0; i < pokemons.length; i++){
		var pokemon = new Pokemon({
			number : pokemons[i].number,
			name : pokemons[i].name,
			types : pokemons[i].types,
			imageUrl : pokemons[i].imageUrl
		})
		pokemon.save()
	}

};


// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
