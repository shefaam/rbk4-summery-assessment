var mongoose = require('mongoose');


// Complete the pokemonSchema below.

var pokemonSchema =({
	number:{type:Number,index:{unique:true}},
	name:{type:String,index:{unique:true}},
	types : String,
	imageUrl : String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon =mongoose.model('Pokemon',pokemonSchema) ;

var save=function(data,callback){
	var pokemon = new Pokemon(data);
	pokemon.save(function(err,data){
		if(err){
			callback(err)
		}else{
			callback(null,data)
		}
	})
}
module.exports.save = save;
module.exports.Pokemon = Pokemon;
