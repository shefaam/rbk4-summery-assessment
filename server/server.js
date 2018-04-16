var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');
var middleware = require('./middleware/rateLimiter');
var route = require('./resources/pokemon/pokemonRouter');

var pokedb = require('./resources/pokemon/Pokemon');

// Create the Express application:
var app = express();
app.use(bodyParser())
app.use(express.static(path.join(__dirname, '../angular-client')));

// Attach middleware:

//i don't have anyidea about it but i like it :D 
middleware()

// Import the pokemonRouter and assign it to the correct route:
// try to route , and run the functions that i've done it in the PokemonRouter 

//get the hole data from the database
//post the data 


app.post('/name' ,function (req , res) {
	pokedb(req.body,function (err , data) {
		if(err){res.send(err);}
			res.send(data);
	})
})
app.get('/name', function (req, res) {
pokedb.Pokemon.find(function (err , data) {
	if(err){res.send(err)}
		res.send(data)
})
});
	
module.exports = app;
