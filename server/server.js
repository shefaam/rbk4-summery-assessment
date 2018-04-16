var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express();



// Attach middleware:

// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

// Import the pokemonRouter and assign it to the correct route:

/////////////////////////////////////////////////////////
app.get('/api/pokemon', function (req, res) {


	res.send('Hellooo')
});



app.post('/api/pokemon', function (req, res) {


  res.send('POST request to the homepage')
});
//
module.exports = app;

//
