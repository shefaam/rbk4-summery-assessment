var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path')
// var client = require(path.join(__dirname, '../react-client/dist')+'/bundle.js')
var router = require(path.join(__dirname, '/resources/Pokemon')+'/pokemonRouter.js')

// Create the Express application:
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
app.use('/api/pokemon',router)



app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.get('/', function (req, res) {
res.render("index");	
});

module.exports = app;
