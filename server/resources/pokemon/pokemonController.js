var Pokemon = require('./Pokemon');
var pokemon=require('./Pokemon');
// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var newPokemon= new Pokemon(req.body);
	newPokemon.save(err =>{
		if(err){
			res.send(err);
		}
		res.send(newPokemon)
	})

};

exports.retrieve = function (req, res) {
Pokemon.find(err,Pokemons)=>{
	if(err){
		res.send(err)
	}
	res.send(Pokemons)
}


};

exports.retrieveOne = function (req, res) {
	Pokemon.findOne(Pokemon,{number:'number'},function(err,pokemon){
		if(err){
			res.send(err);
		}
		res.send(pokemon)
		}
	})
};

exports.updateOne = function (req, res) {
	Pokemon.findByIdAndUpdate(req.params,req.body,{new:true}function(err,Pokemon){
		if(err){
			res.send(err);
		}
		res.send(Pokemon)
	})
		
};

exports.delete = function (req, res) {
	Pokemon.remove(function(err,Pokemon){
		res.remove()
	})

};

exports.deleteOne = function (req, res) {
	Pokemon.deleteOne({number:'number'},function(err,pokemon){
		if(err){
			res.send(err);
		}
		res.send(pokemon)
		}

	})
};
