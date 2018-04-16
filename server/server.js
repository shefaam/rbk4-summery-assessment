var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');

// Create the Express application:
var app = express();
app.use(bodyParser())
app.use(express.static(path.join(__dirname, '../angular-client')));

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	
	db.Pokemon.find(function (err , data) {
		if(err){res.send(err)}
			console.log(data)
	})

});
module.exports = app;
