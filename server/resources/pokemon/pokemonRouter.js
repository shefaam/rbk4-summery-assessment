var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')
pokemonRouter.use(function timeLog(req,res, next){
	console.log();
	next();
})
pokemonController.creatOne.get('/',function(req,res)
{
	res.send(data);
})
pokemonController.retrieve.get('/',function(req , res){
	res.send(data);
})
pokemonController.retrieveOne.get('/',function(req , res){
	res.send(data);
})
pokemonController.updateOne.get('/',function(req , res){
	res.send(data);
})
pokemonController.delete.get('/',function(req , res){
	res.send(data);
})
pokemonController.deleteOne.get('/',function(req , res){
	res.send(data);
})
module.exports = pokemonRouter;
