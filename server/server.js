var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db/index.js');
var http = require('http')
var con = require('/pokemon/pokemonController')
//var poke = require('resources/pokemon/Pokemon.js')
//var insert = require('resources/pokemon/insertAllPokemon.js')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Create the Express application:
app.listen(3000, () => console.log('Example app listening on port 3000!'))


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:

app.get( '/api/pokemon', function ( req, res ) {
	db.find(function( err, data ) {
		if ( err ) {
			return console.log( err )
		} else {
			console.log( data );
			con.createOne()
		}
	})
	res.send( data )
})

app.get('/', function(req,res) {
	res.send('index.html')
})


// app.post('/api/pokemon', function(req,res) {
// 	res.send('get post req')
// })

// app.delete('/api/pokemon', function(req,res) {
// 	res.send('delete pokemon')
// })



// app.get('/api/pokemon/:number', function (req, res) {
// 	res.send('retrieve data')
// })

// app.put('/api/pokemon/:number',function(req,res) {
// 	res.send('update')
// })

// app.delete('/api/pokemon/:number', function(req,res) {
// 	res.send('delete pokemon')
// })

module.exports = app;


//https://api.pokemon.com/us/