var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var Pokemon = require('./resources/pokemon/Pokemon.js');
// Create the Express application:
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(__dirname, '../react-client'));
// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
app.post('/api/pokemon', function(req, res) {
	 res.send(Pokemon.createOne())
})

app.get('/', function (req, res) {
	res.send()
});

module.exports = app;
