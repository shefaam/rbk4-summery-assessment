var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var Pokemon = require("./resources/pokemon/Pokemon"); //
var path = require("path");

// Create the Express application:
var app = express();

// Attach middleware:
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../angular-client")));

// Import the pokemonRouter and assign it to the correct route:
//var pokemonRouter = require("./resources/pokemon/pokemonRouter"); // it causes an error, that's why I commented it

// app.get('/', function (req, res) 
// {
// 	res.render("index");
// });

app.get("/pokemon", function(req, res)
{
	Pokemon.find({}, function (err, docs) 
	{
		if(err)
		{
			console.log(err);
		}
		res.status(200).send(docs);
	});
});

app.post("/pokemon", function(req, res)
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
});

app.delete("/pokemon", function(req, res)
{
	Pokemon.deleteMany({}, function (err)
	{
		if(err)
		{
			console.log(err);
		}
	});
});

app.get("/pokemon/:number", function(req, res)
{
	Pokemon.findOne({}, function(err, pokemon) 
	{
		if(err)
		{
			console.log(err);
		}
		console.log("pokemon has been found", pokemon);
	});
});

app.put("/pokemon/:number", function(req, res, callback)
{
	Pokemon.findOneAndUpdate({number: req.body.number}, req.body, new, callback);
});

app.delete("/pokemon/:number", function(req, res)
{
	Pokemon.deleteOne({number: body.req.number}, function (err)
	{
		if(err)
		{
			console.log(err);
		}
	});
});

module.exports = app;
