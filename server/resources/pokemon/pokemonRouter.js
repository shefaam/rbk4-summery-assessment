var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/api/pokemon',function(req,res){
	pokemonController.retrieve()

})
pokemonRouter.route('/api/pokemon',function(req,res){
	pokemonController.createOne()

})
pokemonRouter.route('/api/pokemon',function(req,res){
	pokemonController.delete()

})

pokemonRouter.route('/api/pokemon/:number')
 pokemonController.retrieveOne()
})

pokemonRouter.route('/api/pokemon/:number')
 pokemonController.updateOne()
})

pokemonRouter.route('/api/pokemon/:number')
 pokemonController.deleteOne()
})



module.exports = pokemonRouter;
