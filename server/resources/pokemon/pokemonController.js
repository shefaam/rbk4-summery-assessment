var Pokemon = require('./Pokemon.js');
var bodyParser = require('body-parser');


// Complete each of the following controller methods
exports.createOne = function (req, res) {
	Pokemon.save(req.body,function(data){
		res.json(data)
	})

//console.log('hi')
};

exports.retrieve = function (req, res) {
	Pokemon.fetch(function(data){
		res.json(data)
	})
	res.send()
// console.log('hi')
// res.send()
// Pokemon.Pokemon.find(function(err,pokemon){
// 		if (err) console.log('error')
// 			res.json(pokemon)
// 	})
//res.send('hello')
//console.log('hello')
};

exports.retrieveOne = function (req, res) {
	var num = req.params.number;
	Pokemon.fetchOne(num,function(data){
		res.json(data)
	})

};

exports.updateOne = function (req, res) {
	var num = req.params.number;
	Pokemon.fetchOne(num,function(data){
		Pokemon.save(data,function(data){
			res.json(data)
		})
	})


};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {
	var num = req.params.number;
	Pokemon.removeOne(num,function(data){
		res.json(data)
		
	})


};

