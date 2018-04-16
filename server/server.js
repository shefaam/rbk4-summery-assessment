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

app.get('/api/pokemon/:number', function (req, res) {
	//it takes retrieveOne() as a callback function
});

app.put('/api/pokemon/:number', function(req,res) {
  //it takes updateOne() as a callback function
});

app.delete('/api/pokemon',function (req, res) {
  //it takes delete() as a callback function
});

app.delete('/api/pokemon/:number',function (req, res) {
  //it takes deleteOne() as a callback function
});


module.exports = app;
