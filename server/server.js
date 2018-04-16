var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path    = require("path");
var pok = require('./resources/pokemon/Pokemon.js');

// Create the Express application:
var app =express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false})); 

app.use(express.static('/../react-client/dist'))
    // .get('/',function (req,res) {
    //     res.sendfile('react-client/dist/index.html');
    //     })


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
// app.post('/pokemon',function(req,res){
// 	console.log(req.body)
// 	pok.save(req.body ,function(err,data){
// 		if(err){
// 			res.send(err);
// 		}else{
// 			res.send(data)
// 		}
// 	})

// })

app.get('/', function (req, res) {
	// pok.Pokemon.find(function(err,data){
	// 	if(err){
	// 		res.send(err);
	// 	}else{
	// 		res.send(data);
	// 	}
	// })
	
});

module.exports = app;
