var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController


pokemonRouter.route('/api/pokemon').get((req,res)=>{

	pokemonController.retrieve(req,res);
})


pokemonRouter.route('/').post((req,res)=>{

	pokemonController.createOne(req,res);
})

pokemonRouter.route('/').delete((req,res)=>{

	pokemonController.delete(req,res);
})




pokemonRouter.route('/api/pokemon:number').get((req,res)=>{
	
	pokemonController.retrieveOne(req,res);
})


pokemonRouter.route('/:number').put((req,res)=>{
	pokemonController.updateOne(req,res);


})

pokemonRouter.route('/:number').delete((req,res)=>{
	pokemonController.deleteOne(req,res);


})

 

module.exports = pokemonRouter;
