var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app=express();


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:
app.route('/api/pokemon')
.get(function (req, res) {
	res.send("test");
	
})
.post(function (req, res) {
	res.send("test");
})
.delete(function (req, res) {
	res.send("test");
});
/////////////
app.route('/api/pokemon/:number')
.get(function (req, res) {
	res.send("test");
})
.put(function (req, res) {
	res.send("test");
})
.delete(function (req, res) {
	res.send("test");
});
///////////


app.get('/', function (req, res) {
	res.send("hello");
});

module.exports = app;
