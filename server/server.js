var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
// Import the pokemonRouter and assign it to the correct route:
var pokemon = require("./resources/pokemon/pokemonRouter.js")
// Create the Express application:
var app = express();
// Attach middleware:  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(morgan('combined'))

app.get('/', function (req, res) {
	
});

module.exports = app;
