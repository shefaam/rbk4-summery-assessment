var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/pokemon').get(function(req, res) 
{
	res.status(200).send(pokemonController.retrieve(req, res));
});
		    
pokemonRouter.route('/:number')
 

module.exports = pokemonRouter;
