var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var newpokemon=new Pokemon({
		number:req.body.number,
		name:req.body.name,
		types:req.body.types,
		imageUrl:req.body.imageUrl
	});
};

exports.retrieve = function (req, res) {
	Pokemon.find()

};

exports.retrieveOne = function (req, res) {

};

exports.updateOne = function (req, res) {
	findOneAndUpdate({number:req.body.number},
	{
		number:req.body.number,
		name:req.body.name,
		types:req.body.types,
		imageUrl:req.body.imageUrl
	})
};

exports.delete = function (req, res) {
	Pokemon.remove()
};

exports.deleteOne = function (req, res) {
	Pokemon.remove({name:req.body.name},function(err){
	})
};
