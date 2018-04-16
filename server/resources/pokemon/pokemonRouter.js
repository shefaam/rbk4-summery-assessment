var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
var poke = pokemonRouter.route('/name')
poke.get(pokemonController.createOne)
poke.post(function (req , res) {
	res.send(pokemonController.createOne)
})
poke.put(function (req , res) {
	res.send(pokemonController.delete)
})


var poNumber = pokemonRouter.route('/:number');

 poNumber.get(function (req , res) {
	res.send(pokemonController.retrieveOne)
});

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