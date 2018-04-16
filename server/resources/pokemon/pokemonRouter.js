var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')
pokemonRouter.route('/createOne')
pokemonRouter.route('/retrieve')
pokemonRouter.retrieveOne.route('/retrieveOne')
pokemonRouter.route('/updateOne') 
pokemonRouter.route('/delete')
pokemonRouter.route('/deleteOne') 


module.exports = pokemonRouter;
