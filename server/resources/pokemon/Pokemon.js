var mongoose = require('mongoose');
// Complete the pokemonSchema below.
mongoose.connect('mongodb://localhost/test');

var pokemonSchema=mongoose.Schema({
	number:Number,
	name:String,
	types:[String],
	imageUrl:String


});



// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon=mongoose.model('Pokemon',pokemonSchema);


module.exports = Pokemon;
