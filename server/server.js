var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var router = require('./resources/pokemon/pokemonRouter.js');
var controller = require('./resources/pokemon/pokemonController.js');
// Create the Express application:
var app = express();
var jsonParser = bodyParser.json() 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
app.post('/api/pokemon', function (req, res) {
	controller.createOne(req,res)
		});
app.get('/api/pokemon', function (req, res) {
	res.send(req.body)
});
app.delete('/api/pokemon', function (req, res) {
	controller.delete();
  res.send('DELETED');
});
app.get('/api/pokemon:number', function (req, res) {
	controller.retrieveOne()
	res.send(req.body)
});
app.put('/api/pokemon:number', function (req, res) {
	controller.updateOne()
	res.send(req.body)
});
app.delete('/api/pokemon:number', function (req, res) {
	controller.deleteOne();
  res.send('DELETED');
});


module.exports = app;
