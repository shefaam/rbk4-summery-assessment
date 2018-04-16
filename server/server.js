var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter.js')

// Create the Express application:
var app= express();

app..use(express.static(__dirname + '../angular-client'))
// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	res.send('index.html')
	
});

module.exports = app;
