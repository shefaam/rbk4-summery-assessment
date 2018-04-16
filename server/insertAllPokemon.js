var db = require('./db');

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(data,callback) {
var p= new Pokemon(data)
db.p.save(function(err,data){
if(err){

	callback(err,null)
}
callback(null,data)

})

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
