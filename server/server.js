var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var rateLimiter=require('./rateLimiter.js')


// Create the Express application:
var app =express();


// Attach middleware:
app.use('rateLimiter',rateLimiter)


// Import the pokemonRouter and assign it to the correct route:

//this to appear home page 
app.get('/', function (req, res) {
	res.render('Hello to backpone ')
	
});

module.exports = app;
