//var _= require('underscore')
//var _und = require("./underscore-min")
//var database = ('./../db/index.js')
var Pokemon = require('./pokemon/Pokemon.js') 
var json = require("./././data/pokemon.json")


// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
// found in data/pokemon.json


// im trying to get the array of the objects from the json file and put them in the database .. using Assets and underscore 

var insertAllPokemon = function() {

	// var newPokemon = _und.extend(
	// 	JSON.parse(Assets.getText('pokemon.json')),{})
	// database.db.insert(newPokemon)

var content = JSON.parse(Assets.getText('pokemon.json'))
Pokemon.Pokemon.insert(content)

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

insertAllPokemon();
