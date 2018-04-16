var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = mongoose.Schema({
	number: {type: Number, index: {unique: true} },
	name: {type: String, index: {unique: true}},
	type: [String],
	imageUrl: String,
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon mongoose.model('Pokemon', pokemonSchema);


module.exports = Pokemon;
