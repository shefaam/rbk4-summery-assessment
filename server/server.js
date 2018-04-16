var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter')
//var pokemonRouter = require('express').Router();

// Create the Express application:
var app = express();


// Attach middleware:

//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4

// Import the pokemonRouter and assign it to the correct route:

app.use('/', pokemonRouter)


module.exports = app;
