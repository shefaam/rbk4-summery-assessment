var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = mongoose.Schema({
	number:Number,
	name:String,
	types:Array,
	imageUrl:String
})
// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.model("Pokemon",pokemonSchema);

// var save = function (data,callback) {
// 	var pokemon = new Pokemon(data)
// 	pokemon.save(function(err,dataRes){
// 		if(err){
// 			callback(err)
// 		}
// 		callback(dataRes)
// 	})
// }

module.exports = Pokemon;
// exports.save = save
