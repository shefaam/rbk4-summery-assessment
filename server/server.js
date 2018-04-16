var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter=require('./resources/pokemon/pokemonRouter.js')
var data=require('../data/pokemon')

// Create the Express application:
var app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:

// app.use('/',pokemonRouter)
app.get('/', function (req, res) {
	// res.send('')
	res.send(data)
	
});
app.post('api/pokemon',function(req,res){
	var number=req.body.number;
	var name=req.body.name;
	var types=req.body.types;
	var imageUrl=req.body.imageUrl;
      data.push({"number":number,"name":name,"types":types,"imageUrl":imageUrl})
      res.send(data)
})

module.exports = app;
