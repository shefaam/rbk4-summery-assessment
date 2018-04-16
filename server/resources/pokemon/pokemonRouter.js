var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')
 
pokemonRouter.post('/api/pokemon',pokemonController.createOne);
pokemonRouter.get('/api/pokemon',pokemonController.retrieve);
pokemonRouter.get(' /api/pokemon/:number ',pokemonController.retrieveOne);
pokemonRouter.PUT('/api/pokemon/:number ',pokemonController.updateOne);
pokemonRouter.DELETE('/api/pokemon ',pokemonController.delete);
pokemonRouter.DELETE('/api/pokemon/:number',pokemonController.deleteOne);


module.exports = pokemonRouter;
