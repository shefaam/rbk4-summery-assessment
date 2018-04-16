var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema=new mongoose.Schema({
	number: {
		type:Number,
		unique:true

	},
    name:{
    	type:String,
    	unique:true
    }
    types: {
    	type:[String]
    },
    imageUrl:{
    	type:String
    }
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon=mongoose.model('Pokemon',pokemonSchema);

	


module.exports = Pokemon;
