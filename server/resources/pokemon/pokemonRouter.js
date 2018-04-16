var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController

pokemonRouter.route('/api/pokemon ')
.get(function(req, res) {
  pokemonController.retrieve(req, res)
})
.post(function(req, res) {
  pokemonController.createOne(req, res)
})
.delete(function(req, res) {
  pokemonController.delete(req, res)
});

pokemonRouter.route('/api/pokemon/:number')
 .get(function(req, res) {
  pokemonController.retrieveOne(req, res)
})
.put(function(req, res) {
  pokemonController.updateOne(req, res)
})
.delete(function(req, res) {
  pokemonController.deleteOne(req, res)
});

module.exports = pokemonRouter;



