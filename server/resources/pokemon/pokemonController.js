var Pokemon = require('./Pokemon');
var db = require("../db");

// Complete each of the following controller methods
exports.createOne = function (req, res) 
{
	var pokemon = new Pokemon(req.body);

	pokemon.save(function(err, data)
	{
		if(err)
		{
			console.log(err);
		}
		console.log("Here is the created data " + data);
	}); 
};

exports.retrieve = function (req, res) 
{
	Pokemon.find({}, function (err, docs) 
	{
		if(err)
		{
			console.log(err);
		}
		console.log("all pokemons has been found", docs);
	});
};

exports.retrieveOne = function (req, res) 
{
	Pokemon.findOne({number: req.body.number}, function(err, pokemon) 
	{
		if(err)
		{
			console.log(err);
		}
		console.log("pokemon has been found", pokemon);
	});
};

exports.updateOne = function (req, res, callback) 
{
	Pokemon.findOneAndUpdate({number: req.body.number}, req.body, new, callback);
};

exports.delete = function (req, res) 
{
	Pokemon.deleteMany({}, function (err)
	{
		if(err)
		{
			console.log(err);
		}
	});
};

exports.deleteOne = function (req, res) 
{
	Pokemon.deleteOne({number: body.req.number}, function (err)
	{
		if(err)
		{
			console.log(err);
		}
	});
};
