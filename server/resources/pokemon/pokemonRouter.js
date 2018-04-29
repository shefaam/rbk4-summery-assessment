var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
  /* START SOLUTION */
  .post(pokemonController.createOne)
  .get(pokemonController.retrieve)
  .delete(pokemonController.delete);
  /* END SOLUTION */

pokemonRouter.route('/:number')
  /* START SOLUTION */
  .get(pokemonController.retrieveOne)
  .put(pokemonController.updateOne)
  .delete(pokemonController.deleteOne);
  /* END SOLUTION */

module.exports = pokemonRouter;
