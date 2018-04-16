var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express();


// Attach middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Import the pokemonRouter and assign it to the correct route:

app.route('/pokemon')
	.get(function(req, res) {
		res.json('test');
	})
	.post(function(req, res) {
		res.json('test');
	})
	.put(function(req, res) {
		res.json('test'); 
	})

app.get('/', function (req, res) {
	
});

// app.get('/pokemon', function(req, res) {

// });

// app.post('/pokemon', function(req, res) {

// });

// app.delete('/pokemon', function(req, res) {

// });

// app.put('/pokemon', function(req, res) {

// });

module.exports = app;
