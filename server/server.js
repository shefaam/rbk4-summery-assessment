var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/api/pokemon', function (req, res) {
	res.send('hi');
});

app.post('/api/pokemon', function (req, res) {
  res.json('POST request to the homepage')
});

app.delete('/api/pokemon', function (req, res) {
  res.send()
});

app.get('/api/pokemon/:number', function (req, res) {
  res.send()
});

app.put('/api/pokemon/:number', function (req, res) {
  res.json('POST request to the homepage')
});

app.delete('/api/pokemon/:number', function (req, res) {
  res.send()
});
module.exports = app;
