var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');
var route = require('./resources/pokemon/pokemonRouter');

var pokedb = require('./resources/pokemon/Pokemon');

// Create the Express application:
var app = express();
app.use(bodyParser())
app.use(express.static(path.join(__dirname, '../angular-client')));

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
// console.log(route.stack[0].route)


app.post('/name' ,function (req , res) {
	console.log(req.body)
})

app.get('/name', function (req, res) {
pokedb.Pokemon.find(function (err , data) {
	if(err){res.send(err)}
		res.send(data)
})
});
	
module.exports = app;
