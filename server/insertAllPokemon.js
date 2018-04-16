var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');

// Create the Express application:
var app = express();
app.use(bodyParser())

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(req,res) {

	db.save(req.body,function(err,data){
		// var pokemon = new Pokemon(data)
		if(err){
			console.log('err')
		}else{
			res.send(data)		
		 }
	})
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();


// - [ ] In `insertAllPokemon.js`, write a function that can populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json`, then run the script/invoke the function so that the database is populated.