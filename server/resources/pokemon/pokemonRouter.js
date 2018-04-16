var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
pokemonRouter.route('/pokemon').post(pokemonController.createOne)
pokemonRouter.route('/pokemon').get(pokemonController.retrieveOne)

pokemonRouter.route('/pokemons').get(pokemonController.retrieve)

pokemonRouter.route('/pokemon').put(pokemonController.updateOne)
pokemonRouter.route('/pokemons').delete(pokemonController.delete)
pokemonRouter.route('/pokemon').delete(pokemonController.deleteOne)

pokemonRouter.route('/:number')
 

module.exports = pokemonRouter;
