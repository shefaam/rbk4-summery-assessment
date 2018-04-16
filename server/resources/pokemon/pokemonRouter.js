var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
	.get(function (req, res) {
		pokemonController.retrieve(req , res); // tested
	})
	.post(function (req, res) {
		pokemonController.createOne(req, res); // tested
	})
	.delete(function (req, res) {
		pokemonController.delete(req, res); // tested
	})

pokemonRouter.route('/:number')
	.get(function (req, res) {
		pokemonController.retrieveOne(req, res); // tested
	})
	.put(function (req, res) {
		pokemonController.updateOne(req, res); // tested
	})
	.delete(function (req, res) {
		pokemonController.deleteOne(req, res); // tested
	})
 

module.exports = pokemonRouter;
