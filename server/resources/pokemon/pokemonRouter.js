var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')
 
pokemonRouter.post('/pokemon/Create',pokemonController.createOne);
pokemonRouter.get('/pokemon/:id/retrieve',pokemonController.retrieve);
pokemonRouter.get('/pokemon/:id/retrieveOne',pokemonController.retrieveOne);
pokemonRouter.post('/pokemon/:id/updateOne',pokemonController.updateOne);
pokemonRouter.get('/pokemon/:id/updateOne',pokemonController.updateOne);
pokemonRouter.get('/pokemon/:id/delete',pokemonController.delete);
pokemonRouter.get('/pokemon/:id/deleteOne',pokemonController.deleteOne);


module.exports = pokemonRouter;
