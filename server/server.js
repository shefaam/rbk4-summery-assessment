var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
// Create the Express application:
var app=express();


// Attach middleware:
app.use('/',express.static('/home/belal/Desktop/rbk4-summery-assessment/react-client/dist'))

var pokemonRouter=require('./resources/pokemon/pokemonRouter.js')
// Import the pokemonRouter and assign it to the correct route:

app.use('/api',pokemonRouter)


// app.get('/', function (req, res) {
	// res.sendFile("/home/belal/Desktop/rbk4-summery-assessment/react-client/dist/index.html")
// });

module.exports = app;
