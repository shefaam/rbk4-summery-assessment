var pokemonRouter=require('./resources/pokemon/pokemonRouter.js')
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app=require('index.js');


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/index', function (req, res) {
	
});

module.exports = app;
