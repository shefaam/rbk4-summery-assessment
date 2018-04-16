var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var middlewares = ('../rateLimiter')
// Create the Express application:
var app = express();
// var pokemonRouter = require('../pokemonRouter');
var router = express.Router()
// server.use(middlewares)
// server.use(router)
// Attach middleware:
router.use(function(req, res, next) {
  console.log('T')
  next()
})

// Import the pokemonRouter and assign it to the correct route:


app.get('/api/pokemon', function (req, res) {
	res.send('hi');
});

app.post('/api/pokemon', function (req, res) {
  res.json('POST request to the homepage')
});

app.delete('/api/pokemon', function (req, res) {
  res.send('delete')
});

app.get('/api/pokemon/:number', function (req, res) {
  res.send()
});

app.put('/api/pokemon/:number', function (req, res) {
  res.json('PuT request to the homepage')
});

app.delete('/api/pokemon/:number', function (req, res) {
  res.send()
});
module.exports = app;
