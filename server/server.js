var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var router = require('./pokemon/pokemonRouter.js')

// Create the Express application:
var app = express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	
	res.send()
	
});

module.exports = app;
