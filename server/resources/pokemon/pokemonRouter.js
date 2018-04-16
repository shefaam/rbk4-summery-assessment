var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:1')
pokemonRouter.route('/:2')
pokemonRouter.route('/:3')
pokemonRouter.route('/:4')
pokemonRouter.route('/:5')
pokemonRouter.route('/:6')

module.exports = pokemonRouter;

