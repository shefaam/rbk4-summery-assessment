var data=require('./data/pokemon.json')
var connection=require('/db/index.js')
var Pokemon=require('/resources/pokemon/Pokemon.js')


// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function(data,callback) {
	console.log(data)
	for (var i=0;i<data.length;i++){
	var pokemon=new Pokemon({number:data[i]['number'],name:data[i]['name'],types:data[i]['types'],imageUrl:data[i]['imageUrl']})
	pokemon.save(function(err,results){
		if(err){
			callback(err,null)
		}
		else{
			callback(null,results)
		}
	})
}
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
// var pokemonSchema=new mongoose.Schema({
// number:{type:Number,unique:true},
// name:{type:String,unique:true},
// types:Array,
// imageUrl:String

// });