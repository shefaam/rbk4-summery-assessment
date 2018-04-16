var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/').get(pokemonController.retrieve);

pokemonRouter.route('/').post(pokemonController.createOne);


pokemonRouter.route('/').delete(pokemonController.delete);

pokemonRouter.route('/:number').get(pokemonController.retrieveOne);
 

pokemonRouter.route('/:number').put(pokemonController.updateOne);

pokemonRouter.route('/:number').delete(pokemonController.deleteOne);
module.exports = pokemonRouter;
