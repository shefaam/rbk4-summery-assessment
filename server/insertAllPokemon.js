var path = require('path')

var db = require(path.join(__dirname, '/resources')+"/pokemon/Pokemon.js")
var fs = require("fs")
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {

fs.readFile(path.join(__dirname, '../data')+'/pokemon.json' , (err, data) => {
  if (err) throw err;
  myData = JSON.parse(data);
  for (var i = 1; i < myData.length; i++) {
  	
  	  var pokemon= new  db.Pokemon({
  	  	number: myData[i].number,
	    name: myData[i].name,
	 	types: myData[i].types,
		imageUrl: myData[i].imageUrl
		});
  	  pokemon.save(function(data){
  	  	console.log("saved",data)

  	  })
  	}

   })

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
