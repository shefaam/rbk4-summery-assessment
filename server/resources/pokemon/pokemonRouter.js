var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.get('/',pokemonController.retrieve)
pokemonRouter.post('/',pokemonController.retrieve)
pokemonRouter.delete('/',pokemonController.retrieve)

pokemonRouter.get('/:number')
pokemonRouter.put('/:number')
pokemonRouter.dlete('/:number')

 
module.exports = pokemonRouter;
