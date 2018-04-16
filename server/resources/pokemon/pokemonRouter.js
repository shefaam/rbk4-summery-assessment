var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
//try to take the function form the controller
var poke = pokemonRouter.route('/name')
poke.get(function (req , res) {
    pokemonController.retrieve(req , res)
})
//add to the database 

poke.post(function (req , res) {
    res.send(pokemonController.createOne)
})
//delete from the database 
poke.put(function (req , res) {
    res.send(pokemonController.delete)
})

var poNumber = pokemonRouter.route('/:number');

//retrive one element form the database 

 poNumber.get(function (req , res) {
	res.send(pokemonController.retrieveOne)
});


//update a element form the database 

poNumber.put(function (req , res) {
	var number =  _.extend(number, req.body);
	  number.save(function(err) {
    if (err) {
        return res.send('/number', {
            errors: err.errors,
            number: number
        });
    } else {
        res.jsonp(number);
    }
})
});
poNumber.delete(function (req , res) {
	res.send(pokemonController.deleteOne)
})
module.exports = pokemonRouter;