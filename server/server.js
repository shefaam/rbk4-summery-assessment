var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
// Create the Express application:
//after make the app equal express function
var app= express();
//now we must conenct the server with out html ????? i think we dont need
//basic to know server work
app.get('/', function (req, res) {
  console.log("HERE TEST:");
  res.send('YOUR REQUEST TO OPEN SERVER DONE');
})

//now GET for /api/pokemon  
app.get('/api/pokemon', function (req, res) {
  console.log("HERE THE GET POKEMON:");
  //Respond with JSON of all Pokémon
  //need to read file from root/data/pokemon.json
  /*
  var fs = require('fs');
  fs.readFile("data/wx.hourly.txt", "utf8", function(err, data){
    if(err) throw err;
    //do operation on data that generates say resultArray;
    return resultArray;
  });
  res.send(resultArray);
  */
    res.send("resultArray 7");

});

//now POST for /api/pokemon  
app.post('/api/pokemon', function (req, res) {
  res.send('post pokemon');
})
//now DELETE for /api/pokemon  
app.delete('/api/pokemon', function (req, res) {
  res.send('delete pokemon ');
})
//need here to make the number after pokemon work
//now GET for /api/pokemon/:number  
app.get('/api/pokemon/:number ', function (req, res) {
  res.send('get pokemon 234');
})
//now PUT for /api/pokemon/:number  
app.put('/api/pokemon/:number ', function (req, res) {
  res.send('put pokemon 234 ');
})
//now DELETE for /api/pokemon/:number 
app.delete('/api/pokemon/:number ', function (req, res) {
  res.send('delete pokemon 234 ');
})
/*
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
*/
// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	
});

module.exports = app;



