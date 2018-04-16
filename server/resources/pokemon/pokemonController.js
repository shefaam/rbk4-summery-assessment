var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
var body = JSON.parse(req.body)
var pokemon = new Pokemon ({
	number : body.number
	name : body.name
	type : body.type
	imageUrl : body.imageUrl

Pokemon.Pokemon.save()
})

};

exports.retrieve = function (req, res) {

Pokemon.find({}, function(err , pokemons){
	return pokemons

})

};

exports.retrieveOne = function (req, res) {
var body = req.body
Pokemon.findOne({number:body.number} , function(err ,pokemon){
	if ( err ) { 
		return handleError(err)
	}
return pokemon

})

};

exports.updateOne = function (req, res) {
var body = JSON.parse(req.body)
Pokemon.findOneAndUpdate({},{}, function(err){
	if (err){
		handleError(err)
	}
})
};

exports.delete = function (req, res) {
Pokemon.remove()
};

exports.deleteOne = function (req, res) {
var body = req.body
Pokemon.remove({number:body.number} ,function (err){
			if (err){
				return handleError(err)
			}
		})
	};
};
