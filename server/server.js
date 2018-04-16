var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var router = require('./pokemon/pokemonRouter.js');
var controller = require('./pokemon/pokemonController.js');
// Create the Express application:
var app = express();
var jsonParser = bodyParser.json() 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
app.post('/api/pokemon', function (req, res) {
	controller.createOne(req,res){
		res.send(req.body)
	}
});
app.get('/api/pokemon', function (req, res) {
	res.send(req.body)
});

module.exports = app;
