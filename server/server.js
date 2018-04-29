var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
/* START SOLUTION */
var app = express();
/* ELSE
var app;
END SOLUTION */

// Attach middleware:
/* START SOLUTION */
app.use(require('./middleware/rateLimiter'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
/* END SOLUTION */

// Import the pokemonRouter and assign it to the correct route:
/* START SOLUTION */
app.use('/api/pokemon', require('./resources/pokemon/pokemonRouter'));
/* END SOLUTION */

app.get('/', function (req, res) {
  /* START SOLUTION */
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!', views: req.views });
  /*
  END SOLUTION */
});

module.exports = app;
