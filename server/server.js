var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var app=express()
// Create the Express application:


app.post('/',function(req,res){
var data=req.body;
db.save(data,function(err,data){
if(err){
console.log(err)
}

res.send(data)

})

})

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {

db.Pokemon.find(function(err,data){
if(err){

console.log(err)
}

res.send(data)
})

	
});

module.exports = app;
