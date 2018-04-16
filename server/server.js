var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
// Create the Express application:
var app= express();
app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Attach middleware:

// Import the pokemonRouter and assign it to the correct route:
app.post('/angular-client', function(req, res){
	res.send()
})

app.get('/data', function (req, res) {
	res.find(,callback)
	if(err){
		
	}
	
});

module.exports = app;
