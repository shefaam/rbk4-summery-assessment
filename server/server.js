var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter=require('./resources/pokemon/pokemonRouter.js')

// Create the Express application:
var app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:

app.use('/',pokemonRouter)
pokemonRouter.get('/', function (req, res) {
	res.send('')
	
});

module.exports = app;
