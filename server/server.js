var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
 res.send('hello world')
});

app.get('/api/pokemon', function (req, res) {
 //Respond with JSON of all Pokémon
});


app.post('/api/pokemon',function(req,res){
//Create new Pokémon and respond with JSON of created Pokémon
});


app.delete('/api/pokemon/:number', function (req, res) {
 //Delete all Pokémon in database and respond with JSON of deleted Pokémon
});

app.get('/api/pokemon/:number', function (req, res) {
 //Respond with JSON of single Pokémon with matching `number
});

app.put('/api/pokemon/:number', function (req, res) {
 //Update Pokémon with matching `number` and respond with JSON of updated Pokémon
});


app.delete('/api/pokemon/:number', function (req, res) {
 //Delete Pokémon with matching `number` and respond with JSON of deleted Pokémon
});



module.exports = app;
