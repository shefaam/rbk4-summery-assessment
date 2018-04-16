var Pokemon = require('./Pokemon');

//var app=require('../server')


// Complete each of the following controller methods


exports.createOne = function (req, res) {

// parse the req and get the new doc to be added to the Pokemons collection
	var number=req.body.number;
	var name=req.body.name;
	var types=req.body.types;
	var imageUrl=req.body.imageUrl;

	var pokemonObj={number:number,name:name,types:types,imageUrl:imageUrl}
	new Pokemon(pokemonObj).save(function(err){
		res.send(pokemonObj);
	})


};

exports.retrieve = function (req, res) {
	Pokemon.find({},function (err, pokemons) {
  		if (err) console.log("error in retriving");
  		else{
  			console.log("success in retreiving");
  			res.send(pokemons)
  		}
});
}

exports.retrieveOne = function (req, res) {

	//var number=req.body.number;
	//console.log("parms value ="+req.params.number.substr(8))

	var num=req.params.number.substr(8);
	Pokemon.findOne({number:num},function(err,pokemon){
		if (err) console.log("error in retriving");
  		else{
  			console.log("success in retreiving");
  			res.send(pokemon)
  		}

	 })


};

exports.updateOne = function (req, res) {

	var number=req.body.number;
	var name=req.body.name;
	var types=req.body.types;
	var imageUrl=req.body.imageUrl;

	Pokemon.update({number:req.params.number}, { number:number,name:name,types:types,imageUrl:imageUrl},function(err,pokemon){
		if(err) console.log("error in updating");
		else{
			console.log("success in updating");
			res.send(pokemon);
		}
	})

};

exports.delete = function (req, res) {
	Pokemon.remove({}, function (err,pokemons) {
  if (err) console.log("error in deleting all");
  else{
  	console.log("success in deleting");
  	res.send(pokemons);
  }
  // removed!
});


};

exports.deleteOne = function (req, res) {

	var number=req.body.number;
	var name=req.body.name;
	var types=req.body.types;
	var imageUrl=req.body.imageUrl;

	Pokemon.remove({number:req.params.number}, function (err,pokemon) {

	if (err) console.log("error in deleting all");
  	else{
  		console.log("success in deleting");
  		res.send(pokemons);
  	}

});
}
