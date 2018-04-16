var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
import pokemonRouter from './resources/pokemon/pokemonRouter.js'
// Create the Express application:
var app=express();


// Attach middleware:
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	res.send('POKEMONS')
});

module.exports = app;
