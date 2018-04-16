var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var pokemon={
		number:req.body.number,
		name:number:req.body.name,
    	types:number:req.body.types,
    	imageUrl:number:req.body.imageUrl

	}
	Pokemon.create(pokemon, function (err, pokemon) {
	  if (err){
	  	res(err);
	  } 

	})
};

exports.retrieve = function (req, res) {
	 Pokemon.find({}).exec(function (err, pokemon) {
	  res(pokemon)
	});
};

exports.retrieveOne = function (req, res) {
	Pokemon.find({ number: req.body.number }).exec(function (err, pokemon) {
	  res.send(pokemon)
	});
};

exports.updateOne = function (req, res) {
Pokemon.update({ number: req.body.number }, { $set: req.body}, function(err,pokemon){
res.send(pokemon)
});
};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {

};
