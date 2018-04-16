
fs = require('fs')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database

var pokemonModel=require('./resources/pokemon/Pokemon.js')

//console.log(pokemonModel);

var insertAllPokemon = function(callback) {

fs.readFile('../data/pokemon.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  // parse the json data
  data=JSON.parse(data);
  callback(data);


  // iterate over the records in data variable and add them as pokemonModel
  
});

};




// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon(function(data){
	//console.log(data);
	for(var i=0;i<data.length;i++){
	  	//console.log(data[i].number);

	  // var newPokemon={number:data[i].number,name:data[i].name,types:data[i].types,imageUrl:data[i].imageUrl}
	  var newPokemon={number:data[i].number,name:data[i].name,types:data[i].types,imageUrl:data[i].imageUrl}


	  var pokemonInstance=new pokemonModel(newPokemon);

	  pokemonInstance.save(function(err){

	  		//console.log('any thing')
	  		
  		if (err) console.log("error");

	  	else {
	  		console.log("success insertion");
	  		}
	  	});
	  

}
});
