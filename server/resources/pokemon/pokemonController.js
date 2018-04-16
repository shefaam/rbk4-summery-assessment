var Pokemon = require('./Pokemon');


// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var data = req.body
	var pokemon = new Pokemon({
			number : data.number,
			name : data.name,
			types : data.types,
			imageUrl : data.imageUrl
		})
		pokemon.save()
	res.send(pokemon)
};

exports.retrieve = function (req, res) {
	Pokemon.find({}, 'name', function(err, results){
		res.send(results)
	})
	//res.send('retrieve')
};

exports.retrieveOne = function (req, res) {
	var num = req.params.number
	Pokemon.find({number : num}, function(err, results){
		res.send(results)
	})
};

exports.updateOne = function (req, res) {
	var num = req.params.number
	var update = req.body.update

	Pokemon.findOneAndUpdate({number : num}, update)
	res.send(num, 'update')
	//Bulbasaur
};


exports.delete = function (req, res) {
	//TODO:
	res.send('delete')
};

exports.deleteOne = function (req, res) {
	var num = req.params.number
	Pokemon.deleteOne({number : num}, function(err){})
	res.send('deleteOne')
};
