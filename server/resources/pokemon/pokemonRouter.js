var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')

pokemonRouter.route('/api/pokemon').all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
	pokemonController.retrieve(req,res)
})
.post(function(req, res, next) {
	pokemonController.createOne(req,res)
})
.delete(function(req, res, next) {
	pokemonController.delete(req,res)
});

 
pokemonRouter.route('/api/pokemon/:number').all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
	pokemonController.retrieveOne(req,res)
})
.put(function(req, res, next) {
	pokemonController.updateOne(req,res)
})
.delete(function(req, res, next) {
	pokemonController.deleteOne(req,res)
});




module.exports = pokemonRouter;
