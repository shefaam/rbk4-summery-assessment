var Pokemon = require('Pokemon');
var db = require('./db');
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database


// i need to read the pokemon.json file and save the data inside of it 
// in the database 

var insertAllPokemon = function() {
fs.readFile('./data/pokemon.json', 'utf8', (err, data) => {
  if (err) {throw err};
  db.Pokemon.save(data);
});
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
