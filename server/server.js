var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app=express();
var router=express.Router()

router.use('/pokemonRouter/:number', function (req, res){
	console.log("any thing")
})





// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/pokemonRouter/:number', function (req, res) {
	res.send('')
	
});

module.exports = app;
