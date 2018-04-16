var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var router = require('./resources/pokemon/pokemonRouter.js')
//var pokemonController = require('./resources/pokemon/pokemonController');

// Create the Express application:
var app = express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


// app.get('/', function () {
// 	pokemonController.createOne
	
// });

// app.get('/',function(){
// 	router.pokemonRouter.get
// })
app.use('/',router.pokemonRouter)
app.use('/:number',router.pokemonRouter)

module.exports = app;
