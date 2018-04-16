var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('./pokemonController')

pokemonRouter.route('/:number')
 

module.exports = pokemonRouter;
