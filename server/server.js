var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter.js');

var app = express();

// now i understand 
// app.use('/static', express.static('public'))
// app.use('/static', express.static('public'))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Attach middleware:

// Import the pokemonRouter and assign it to the correct route:

// i know how to do that exactly 
app.get('/' + pokemonRouter, function (req, res){
	res.send("hello")
})

app.get('/', function (req, res) {
	console.log(pokemonRouter)
	res.send("/")
});

module.exports = app;
