var fs = require("fs");
var db = require('./db');
var Pokemon = require('./resources/pokemon/Pokemon');
var pokemonController = require('./resources/pokemon/pokemonController');







// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {

// I will use sync since it will be only one time.
// I got the following from the following website:
//https://www.codementor.io/codementorteam/how-to-use-json-files-in-node-js-85hndqt32
var contents = fs.readFileSync("data/pokemon.json");
var jsonContent = JSON.parse(contents);

jsonContent.forEach(function(item){
	var pokemon = new Pokemon(item);
	pokemon.save(function (err, pokemon) {
    if (err) return console.error(err);
    console.log(pokemon);

  });
});

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
