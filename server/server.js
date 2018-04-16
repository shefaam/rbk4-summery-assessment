var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var fs = require('fs');
var path = require('path');
//var use = require('use');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Create the Express application:
//after make the app equal express function
var app= express();
//now we must conenct the server with out html ????? i think we dont need
//when ask for home page
app.get('/', function (req, res) {
  console.log("HERE TEST:");
     res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
})
//now GET for /api/pokemon  /////////////////////////////////////////////////////////////////////////////
//now GET for /api/pokemon  /////////////////////////////////////////////////////////////////////////////
//Respond with JSON of all Pokémon
app.get('/api/pokemon', function (req, res) {
  console.log("GET POKEMON:");
  //need to read file from root/data/pokemon.json
  var dataArray
  var resultArray=[];
  fs.readFile(path.join(__dirname, '../data/pokemon.json'), function read(err, data){ 
    // if erroe 
    if(err){
      //console log this error
      throw err;
    }
    //but all the file contains pokemon data inside array
    //and we use JSON.parse to convert it to obj
    dataArray=JSON.parse(data);
    console.log(dataArray[0])
    res.send(dataArray)
    //itreate for all the data and but the name for the pokemon in array
    /*
    for (var i = 0; i < dataArray.length; i++) {
      resultArray.push(dataArray[i].name)
    }
    //now make it asyncronans     
    processFile()
    */
  });
  function processFile() {
    console.log("HERE THE DATA IN ASYNC:");
    res.send(resultArray);
  }
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



