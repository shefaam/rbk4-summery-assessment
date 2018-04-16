var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var controller = require('../pokemon/PokemonController.js');
var router = require('../pokemon/PokemonRouter.js');


app.use('/static', express.static(path.join(__dirname, '../react-client/dist')))

// Create the Express application:
var app = express();


app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())





// Attach middleware:

router.get('/:number', function (req, res, next) {
//   // if the user ID is 0, skip to the next router
//   if (req.params.id === '0') next('route')
//   // otherwise pass control to the next middleware function in this stack
//   else next()
// }, function (req, res, next) {
//   // render a regular page
//   res.render('regular')

 
 app.get('/api/pokemon', function (req, res) {
	
 // Get all data

 // invoke retrieve function

res.sendStatus(200);

});

app.set('/api/pokemon', function (req, res) {
	
 // Create an element

 // invoke create function

 res.send(data);

});

app.set('/api/pokemon', function (req, res) {

 // Remove all elements

 // invoke delete function

 res.sendStatus(200);
	
});



})





router.get('/', function (req, res, next) {
//   // if the user ID is 0, skip to the next router
//   if (req.params.id === '0') next('route')
//   // otherwise pass control to the next middleware function in this stack
//   else next()
// }, function (req, res, next) {
//   // render a regular page
//   res.render('regular')

  app.get('/api/pokemon/:number', function (req, res) {

  // Get an element

  // invoke retrieveOne function

  res.send(data);
	
});


app.set('/api/pokemon/:number', function (req, res) {

 // Update an element

 // invoke updateOne function

  res.send(data);
	
});



})


// Import the pokemonRouter and assign it to the correct route:







module.exports = app;
