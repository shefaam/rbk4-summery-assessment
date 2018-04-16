var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db/index.js');
var path = require('path')
const mongoose = require('mongoose');
 // var mySchema = require('./resources/pokemon/Pokemon.js')
// var rate = require('./middleware')
// Create the Express application:
var app = express();
app.use(bodyParser())


// app.use(express.static(__dirname + '../angular-client')); 
//console.log('here herer hrere rhere',__dirname)
app.use('/', express.static(path.join(__dirname, '../angular-client')))




// Attach middleware:
app.post('/',function(req , res){
	console.log('here here here',req.body)

	// i need to send the data to the database but my schema(Pokemon) is undefined
	// mySchema(req.body, function(err,data){
	// 	if(err){
	// 		console.log('error')
	// 	}else{
	// 		res.send(data)
	// 	}
	// })
})
// Import the pokemonRouter and assign it to the correct route:
app.get('/', function (req, res) {

	db.Pokemon.find(function(err,data){
		if(err){
			console.log('error')
		}else{
			res.send(data)
		}
	})

});

module.exports = app;
