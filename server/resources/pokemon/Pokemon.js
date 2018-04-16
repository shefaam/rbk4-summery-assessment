var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poke');

// Complete the pokemonSchema below.

var pokemonSchema  = mongoose.Schema ({
	number: Number,
	name: String,
	types: String,
	imageUrl: String
});

var pokemon = new mongoose.model('Pokemon', pokemonSchema);


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.


// db.find = function(data) {
// 	// for (var i = 0; i < data.length; i++) {
// 	// 	// var poke = new Poke ({
// 	// 	// 	number: data[i].number,
// 	// 	// 	name: data[i].name,
// 	// 	// 	types: data[i].types
// 	// 	// })
		
// 	// }
// }

module.exports = Pokemon;
module.exports = pokemonSchema;