var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController.js');

// Create route handlers for each of the six methods in pokemonController
//pokemonRouter.route('/').get(pokemonController.retrieve);

// pokemonRouter.route('/').post(pokemonController.createOne);


// pokemonRouter.route('/').delete(pokemonController.delete);

// pokemonRouter.route('/:number').get(pokemonController.retrieveOne);
 

// pokemonRouter.route('/:number').put(pokemonController.updateOne);

// pokemonRouter.route('/:number').delete(pokemonController.deleteOne);

// pokemonRouter.route('/')
// .get(function(){pokemonController.retrieve})
// .post(pokemonController.createOne)
// .delete(pokemonController.delete)

 //pokemonRouter.route('/',function(){}) 


// pokemonRouter.get('/',function(req,res){
// 	res.send(pokemonController.retrieve)
// 	// console.log('hi')
// 	// res.send()
// })

pokemonRouter.get('/',function(){
	pokemonController.retrieve
	// console.log('hi')
	// res.send()
})

pokemonRouter.post('/',function(){
	pokemonController.createOne
	//console.log('hi')
})

pokemonRouter.delete('/',function(){
	pokemonController.delete
	//console.log('hi')
})


pokemonRouter.get('/:number',function(){
	pokemonController.retrieveOne
	//console.log('hi')
})

pokemonRouter.put('/:number',function(){
	pokemonController.updateOne
	//console.log('hi')
})

pokemonRouter.delete('/:number',function(){
	pokemonController.deleteOne
	//console.log('hi')
})
module.exports.pokemonRouter = pokemonRouter;
