var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

import pokemonRouter from ('./pokemonRouter.js')

// Create the Express application:
var app;


// Attach middleware:
app.post('/pokemon', function(req, res){
	var data = req.body;
	//POST
	db.save(data, function(data,err){
		if ( err ){
			// res.send( err )
			console.log( 'ERROR HAS BEEN DETECTED IN POST' )
		} else {
			res.send( data )
			console.log( 'DATA PASSED IN POST!' )
		};
	});
})

app.get('/pokemon', function(req,res){ //GET - find the data and retrieve it to the data
	var data = req.body;
	db.pokemon.save(data, function(data,err){ //callback() ???
		if( err ){
			console.log( 'ERROR HAS BEEN DETECTED IN GET' )
		} else {
			res.send( data )
			console.log( 'DATA PASSES IN GET' )
		}
	});
});

// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	
});

module.exports = app;
