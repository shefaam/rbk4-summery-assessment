var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var Pokemon = require('./resources/pokemon/Pokemon')
// Create the Express application:
var app = express()


// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
res.send('welcome khayauuu')
});
app.get('/api/pokemon', function (req, res){
	Pokemon.find({}, function(err, data){
		if (err){
			res.statusCode(500)
		}
		else {
			res.json(data)
		}
	});
});
app.post('/api/pokemon', function (req, res){
	var name = req.body.name
	var number = req.body.number
	var types = req.body.types
	var imageUrl = req.body.imageUrl
	var pokemon = new Pokemon({
		name : name,
		number : number,
		types : types,
		imageUrl : imageUrl
	})
	pokemon.save(function(err, data){
		if (err){
			console.log(err);
		}else {
			console.log(data);
		}
	})
	res.json(pokemon)
});
app.delete('/api/pokemon', function (req, res){
	Pokemon.remove({}, function(err, data){
		if (err){
			console.log(err);
		}else {
			res.json(data)
		}
	})
});
app.get('/api/pokemon/:number', function (req, res){
	Pokemon.findOne(req.params, function(err, data){
		if (err){
			console.log(err);
		}
		else {
			res.json(data)
		}
	})
});
app.put('/api/pokemon/:number', function (req, res){
	Pokemon.findOne(req.params, function(err, data){
		if (err){
			console.log(err);
		}
		else {
			Pokemon.set(req.body)
			var newData = Pokemon.findOne(req.params, function(err, newData){
				if (err){
					console.log(err);
				}
				else {
					res.json(newData)
				}
			})
		}
	})
});
app.delete('/api/pokemon/:number', function (req, res){
	Pokemon.remove(req.params, function(err, data){
		if (err){
			console.log(err);
		}else {
			res.json(data)
		}
	}
});


module.exports = app;
