var mongoose = require('mongoose');
//var db=require('.../db/index.js')


mongoose.Promise = global.Promise;


var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);
db=mongoose.connection;

db.on('connected', function(){

    console.log("connect to db");
});
// Complete the pokemonSchema below.

var pokemonSchema=new mongoose.Schema({
	number: {
		type:Number,
		unique:true

	},
    name:{
    	type:String,
    	unique:true
    },
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
