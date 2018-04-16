var pokemonRouterRouter = require('express').Router();
var pokemonRouterController = require('./pokemonRouterController');
var express = require('express');
var db = require ('../db');
// Create route handlers for each of the six methods in pokemonRouterController
pokemonRouter.route('/')

pokemonRouter.route('/:number')
 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	pokemonRouter.post('/poke',function(err,data){;
	if(err){
		console.log(err);
	}else{
		res.send(data)
	}
})
};

exports.retrieve = function (req, res) {
 pokemonRouter.get("/",function(err,data){
 	if(err){
 	console.log(err);	
 	}else{
 	console.log(data)	
 		res.send(JSON);
 	}
 })
};

exports.retrieveOne = function (req, res) {
	var x=req.body.number;
	app.find(x,
pokemonRouter.get('/',function(err){
if(err){
	console.log(err);
}else{
	console.log(x)
	res.send(JSON);
}
}));

};

exports.updateOne = function (req, res) {
app.find(req.body.number,
pokemonRouter.put(body.number,function(err,data){
 if(err){
 	console.log(err);
 }else{
  res.send(req.body.number);
 }

}))

};

exports.delete = function (req, res) {
pokemonRouter.remove(function(err,data){
	if(err){
		console.log(err);
	}else{
	res.send("data have been deleted")	
	}
})
};

exports.deleteOne = function (req, res) {
app.find(req.body.number,
	pokemonRouter.remove(function(err,data){
		if(err){
			console.log(err);
		}else{
			res.send()
		}
	}))

};
module.exports = pokemonRouterRouter;
