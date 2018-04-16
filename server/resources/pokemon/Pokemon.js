var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = mongoose.Schema({
	number: {type: Number , unique: true},
	name: {type: String , unique: true},
	types: [String],
	imageUrl : String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.model('Pokemon',pokemonSchema);

function save(data){
	//console.log(data)
	var pokemon = new Pokemon({number:data.number,name:data.name,types:data.types,imageUrl:data.imageUrl})
	pokemon.save(function(err){
			if (err) console.log('error')
		})

}


module.exports.Pokemon = Pokemon;
module.exports.save = save;