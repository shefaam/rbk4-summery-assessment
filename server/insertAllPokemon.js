var fs = require('fs')
var db = require('')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(callback) {
// 	var data;
// 	// read the pokemon.json file on data folder
// 	fs.readFile('../data/pokemon.json',function(err,dataRes){
// 		if(err){
// 			console.log(err)
// 		}
// 		//parse the content
// 		data = JSON.parse(dataRes)
// 	})
// //save into the data base
// db.save(data,function(err,data){
// 	if(err){
// 		callback(er)
// 	}
// 	callback(data)
// })
// console.log('poke poke')
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
