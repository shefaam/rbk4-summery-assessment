var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express()


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	res.send('hello world')
});
app.get('/api/pokemon', function (req, res){
	
});
app.post('/api/pokemon', function (req, res){

});
app.delete('/api/pokemon', function (req, res){

});
app.get('/api/pokemon/:number', function (req, res){

});
app.put('/api/pokemon/:number', function (req, res){

});
app.delete('/api/pokemon/:number', function (req, res){

});


module.exports = app;
