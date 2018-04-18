var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema;
db.on('error',console.error.bind(console, 'connection error:'))

var pokemonSchema=new Schema({
	 "number":{type:Number},
       "name": {type:String},
	  "types": {type:Object},
	  "imageUrl":{type:String}

	  }
	     
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon;


module.exports = Pokemon;
