var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
pokemonRouter.route('/created')
pokemonRouter.route('/retrieve')
pokemonRouter.route('/delete')
pokemonRouter.route('/update')
pokemonRouter.route('/:number')
 

module.exports = pokemonRouter;
