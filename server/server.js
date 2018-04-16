var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');
var route = require('./resources/pokemon/pokemonRouter');

// Create the Express application:
var app = express();
app.use(bodyParser())
app.use(express.static(path.join(__dirname, '../angular-client')));

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:

app.get('/name', function (req, res) {
	
});
	
module.exports = app;
