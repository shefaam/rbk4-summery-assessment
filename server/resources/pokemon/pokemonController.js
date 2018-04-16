var Pokemon = require('./Pokemon');
var db = require('./pokemon/Pokemon.js');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var object={
		number: req.body.number,
		name: req.body.name,
		types: req.body.types,
		imageUrl: req.body.imageUrl

	}
	Pokemon.create(object,function(err,Objdata){
		if(err){
			res.send(err)
		}
		res.send(Objdata)
	})

};

exports.retrieve = function (req, res) {

};

exports.retrieveOne = function (req, res) {

};

exports.updateOne = function (req, res) {

};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {

};
