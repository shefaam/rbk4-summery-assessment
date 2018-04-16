var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = new mongoose.Schema({ //object that will take the contents of the table.
	name: String,
	number: Number,
	types: Array,
	imageURL: String
});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.model('Pokemon', pokemonSchema);


module.exports = Pokemon;
