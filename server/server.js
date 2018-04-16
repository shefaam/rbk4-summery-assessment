var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db/index.js');

// Create the Express application:
var app = express();

// Attach middleware:



// Import the pokemonRouter and assign it to the correct route:


app.get('/api/pokemon', function (req, res) {
	res.send("Respond with JSON of all Pokémon")
});

app.post('/api/pokemon', function (req, res) {
	
});

app.delete('/api/pokemon', function (req, res) {
	
});

app.get('/api/pokemon', function (req, res) {
	
});

app.get('/api/pokemon', function (req, res) {
	
});

app.get('/api/pokemon', function (req, res) {
	
});



module.exports = app;
