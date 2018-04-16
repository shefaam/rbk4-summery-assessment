var mongoose = require('mongoose');


// Complete the pokemonSchema below.

var pokemonSchema = new Schema({
	number: { type: Number, unique: true },
	name: { type: String, unique: true },
	types: [{type:String}],
	imageUrl: String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

var save = function(data,callback){
	var Pokemon = new Pokemon
	Pokemon.save(function(err,data){
		if(err){
			callback(err)
		}else{
			callback(data)
		}
	})
}



module.exports = Pokemon;



// thing: { type: 'string', unique: true }


// The default connection of the mongoose module.

// Example:
// var mongoose = require('mongoose');
// mongoose.connect(...);
// mongoose.connection.on('error', cb);
// This is the connection used by default for every model created using mongoose.model.