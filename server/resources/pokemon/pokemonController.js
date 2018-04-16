var Pokemon = require('./Pokemon');

// Complete each of the following controller methods

exports.createOne = function (req, res) {
	var number = req.body.number;
	var name = req.body.name;
	var types =req.body['types[]'];
	var imageUrl = req.body.imageUrl;
	var pokeObj = {
		number: number,
		name: name,
		types: types,
		imageUrl: imageUrl
	};
	var pokemon = new Pokemon(pokeObj);
	pokemon.save();
	res.json('Saved');
};

exports.retrieve = function (req, res) {
	Pokemon.find({}).exec(function(err, data) {
		res.json(data);
	});
};

exports.retrieveOne = function (req, res) {
	var number = req.params.number;
	Pokemon.findOne({number:number}).exec(function (err, found) {
		res.json(found);
	})
};

exports.updateOne = function (req, res) {
	var number = req.params.number;
	var name = req.body.name;
	var type =req.body.type;
	var imageUrl = req.body.imageUrl;
	var pokeObj = {
		number: number,
		name: name,
		types: type,
		imageUrl: imageUrl
	};
	Pokemon.findOneAndUpdate({number:number}, pokeObj, function(err, data){
		if (err) {
			console.log (err);
		}
		res.json(data);
	})
};

exports.delete = function (req, res) {
	Pokemon.deleteMany({}, function (err) {
		if (err) {
			console.log(err);
		}
	});
	res.json('Deleted');
};

exports.deleteOne = function (req, res) {
	var number = req.params.number;
	Pokemon.findOneAndRemove({number:number}, function(err, deleted) {
		if (err) {
			console.log(err);
		}
		res.send(deleted);
	})
};