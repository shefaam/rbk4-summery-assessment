var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app=express();



// Attach middleware:
app.use(function(req,res){
	console.log("hey")
})
// Import the pokemonRouter and assign it to the correct route:
var pokemonRouter=require('./pokemonRouter')

app.get('/', function (req, res) {
	res.send("pokemon world")
	
});

module.exports = app;
