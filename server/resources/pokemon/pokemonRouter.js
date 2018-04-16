var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')
 // it should be in this way ,, but i didn't finshed the controller functions yet !! 
 var create1 = function (req, res, next) 
 {
 	createOne()
 	next()

 }

var ret = function (req, res, next)
{
	retrieve()
	next()
}
var ret1 = function (req, res, next) 
 {
 	retrieveOne()
 	next()

 }
 var upd = function (req, res, next) 
 {
 	updateOne()
 	next()

 }
 var dlt = function (req, res, next) 
 {
 	delete()
 	next()

 }
 var dlt1 = function (req, res, next) 
 {
 	deleteOne()
 	next()

 }

module.exports = pokemonRouter;
