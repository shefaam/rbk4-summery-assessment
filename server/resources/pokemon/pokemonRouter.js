var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')

pokemonController.createOne
pokemonController.retrieve
pokemonController.retrieveOne
pokemonController.updateOne
pokemonController.delete
pokemonController.delteOne

 


module.exports = pokemonRouter;
