var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var pokeInfo=req.body;

	var pokemon=new Pokemon(pokeInfo)

	pokemon.save(function(err,pokemon){
		if(err){
			console.log(error)
		}
		res.send('Pokemon Created!')
	})
};

exports.retrieve = function (req, res) {
	Pokemon.find(function(err,resultsArr){
		if(err){
			console.log(err)
			res.send(500);
		}else{
		console.log(resultsArr);
		res.send(resultsArr);	
		}
	})
};

exports.retrieveOne = function (req, res) {
Pokemon.find({name:req.body.name},function(err,result){
	if(err){
		console.log(err);
		res.send(500)
	}else{
		
		console.log(result);
		res.send(result);
	}
	})
};

exports.updateOne = function (req, res) {
	Pokemon.findById(req.body._id,function(err,pokemon){
		if(err){
			console.log(err)
			res.send(500);
		}else{
			pokemon.number=req.body.number;
			pokemon.name=req.body.name;
			pokemon.types=req.body.types;
			pokemon.imageUrl=req.body.imageUrl;

			pokemon.save(function(err,pokemon){
				if(err){
					console.log(error);
					res.send(err)
				}else{
					console.log('Pokemon Updated!')
				}
			})
		}
	})
};

exports.delete = function (req, res) {
	Pokemon.remove({},function(err){
		if(err){
			console.log(err)
			res.send(500)
		}else{
			console.log('Removed all pokemons!')
		}
	})
};

exports.deleteOne = function (req, res) {
	Pokemon.remove({_id:req.body._id},function(err){
	if(err){
			console.log(err)
			res.send(500)
		}else{
			console.log('Pokemon Removed!')
		}	
	})
};
