var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
// that utilizes each of your controller's methods. Be sure to handle errors appropriately!
var app = express()

pokemonRouter.route('/')

pokemonRouter.route('/:number')

//Get method route

 

module.exports = pokemonRouter;
