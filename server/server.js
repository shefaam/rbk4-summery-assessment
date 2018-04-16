var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app=express();



// Attach middleware:
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(express.static('../react-client/dist'))

// Import the pokemonRouter and assign it to the correct route:
var pokemonRouter=require('./resources/pokemon/pokemonRouter.js')

app.use('/',pokemonRouter);

app.get('/', function (req, res) {
	
});

module.exports = app;
