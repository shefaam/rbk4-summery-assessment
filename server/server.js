 import pokemonRouter from '/pokemon';
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var serv= require('./react-client/components/index.jsx')
// Create the Express application:
var app = express();


// Attach middleware:
app.get('/',function(req,res){
	serv.render('/index')
})

// Import the pokemonRouter and assign it to the correct route:
app.post('/poke', function(req, res){
	var pok= req.body.poke
	console.log("lolo",pok)
	db.save(pok)
	res.json(pok)
	
})

app.get('/poke',function(req,res){
 	
	db.insertAllPokemon(function(err, data){
	if (err) {
		res.sendStatus(500)
	}else{
		res.json(data);
	}
	})
 });

module.exports = app;
