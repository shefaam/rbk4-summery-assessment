var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');
var pokemonRouter = require('./server.js')
 // Import `pokemonRouter` into `server.js` and assign it to the correct route
// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/',function(req,res){
	// pokemonRouter.createOne(){}
})
							//handler function for the path
pokemonRouter.route('/:number',function(req,res){

})
 

module.exports = pokemonRouter;