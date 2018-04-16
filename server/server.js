var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var router = require('./resources/pokemon/pokemonRouter.js')
var pokemonController = require('./resources/pokemon/pokemonController');
var pokemon = require('./resources/pokemon/Pokemon.js');
var home = require('../react-client/src/index.jsx')
// Create the Express application:
var app = express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


// app.get('/', function () {
// 	pokemonController.createOne
	
// });

// app.get('/',function(){
// 	router.pokemonRouter.get
// })
////////////////////////////
// app.use('/',router.pokemonRouter)
// app.use('/:number',router.pokemonRouter)
/////////////////////////

// app.get('/',function(){
// 	pokemonController.createOne
// 	//console.log('hi')
// })
//////////////////////////////

app.get('/',function(req,res){
	res.send(home)
})
//////////////
// app.get('/',function(req,res){
// 	pokemon.save(req.body,function(data){
// 		res.json(data)

// 	})
// })
module.exports = app;



