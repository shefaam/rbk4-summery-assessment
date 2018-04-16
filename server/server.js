var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var router = require('./resources/pokemon/pokemonRouter');
var path = require('path');

// Create the Express application:
var app = express();

// Attach middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../react-client/dist')));

// Import the pokemonRouter and assign it to the correct route:

app.use('/pokemon',router)

app.get('/', function (req, res) {
});



module.exports = app;
