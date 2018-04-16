var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express();

//I should use the angular here
// app.use(.... angular-client)
// Attach middleware:

// Import the pokemonRouter and assign it to the correct route:
var pokemonController = require('./resources/pokemon/pokemonRouter.js')
app.use('/api/pokemon', pokemonController);


app.get('/', function (req, res) {

});

module.exports = app;
