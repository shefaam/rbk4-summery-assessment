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

function save(data,callback){
	//console.log(data)
	var pokemon = new Pokemon({number:data.number,name:data.name,types:data.types,imageUrl:data.imageUrl})
	pokemon.save(function(err,pokemon){
			if (err) console.log('error')
			callback(pokemon)
		})

};


function fetch(callback){
	Pokemon.find(function(err,pokemon){
		if (err) console.log('error')
			callback(pokemon)
	})
};

function fetchOne(num,callback){
	Pokemon.findOne({'number':num},function(err,pokemon){
		if (err) console.log('error')
			callback(pokemon)
	})

}

function removeOne(num,callback){
	Pokemon.remove({'number':num},function(err,pokemon){
		if (err) console.log('error')
			callback(pokemon)
	})


}

module.exports.Pokemon = Pokemon;
module.exports.save = save;
module.exports.fetch = fetch;
module.exports.fetchOne = fetchOne;
module.exports.removeOne = removeOne;