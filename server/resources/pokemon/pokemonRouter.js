var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

app.get('/create', function (req, res) {
  res.send('create!')
})

app.get('/retrieve', function (req, res) {
  res.send('retrieve!')
})

app.get('/retrieveOne', function (req, res) {
  res.send('retrieveOne!')
})

app.get('/updateOne', function (req, res) {
  res.send('updateOne!')
})

app.get('/delete', function (req, res) {
  res.send('delete!')
})

app.get('/deleteOne', function (req, res) {
  res.send('deleteOne!')
})

pokemonRouter.route('/:number')
 

module.exports = pokemonRouter;
