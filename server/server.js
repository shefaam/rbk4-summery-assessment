var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path')
var router = require(path.join(__dirname, '/resources/Pokemon')+'/pokemonRouter.js')

// Create the Express application:
var app = express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
app.use('/api/pokemon',router)



// app.use(express.static(path.join(__dirname, '../react-client/dist/'+'index')))
// app.get('/', function (req, res) {
// res.render(index);	
// });

module.exports = app;
