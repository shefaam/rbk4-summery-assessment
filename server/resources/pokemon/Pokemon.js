var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema =mongoose.Schema({

 		number:{type:Number,unique:true},
 		name:{type:String,unique:true},
 		types: Array,
 		imageUrl:String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon=mongoose.model('Pokemon',pokemonSchema);

var save=function(pokemonInstance){

	pokemonInstance.save(function(err,pokemon){
		if(err){
			console.log(err)
		}else{
			console.log('saved pokemon!')
		}
	})
}
module.exports = Pokemon;
module.exports.save = save;
