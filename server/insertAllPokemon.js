var Pokemon = require('Pokemon')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database


// i need to read the pokemon.json file and save the data inside of it 
// in the database 
var insertAllPokemon = function() {
fs.readFile('/data', 'utf8', (err, data) => {
  if (err) throw err;
  Pokemon.save(data);
});
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
