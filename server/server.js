var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var Pokemon = require('./resources/pokemon/Pokemon')
var ctrl = require('./resources/pokemon/pokemonController')
var router = require('./resources/pokemon/pokemonRouter')
// Create the Express application:
var app = express()


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
res.send('welcome khayauuu')
});
app.get('/api/pokemon', function (req, res){
	ctrl.retrieve(req, res)
});
app.post('/api/pokemon', function (req, res){
	ctrl.createOne(req, res)
});
app.delete('/api/pokemon', function (req, res){
	ctrl.delete(req, res)
});
app.get('/api/pokemon/:number', function (req, res){
	ctrl.retrieveOne(req, res)
});
app.put('/api/pokemon/:number', function (req, res){
ctrl.updateOne(req, res)
});
app.delete('/api/pokemon/:number', function (req, res){
	ctrl.deleteOne(req, res)
});


module.exports = app;
