var Pokemon = require('./Pokemon');
var db = require('./db');



// Complete each of the following controller methods
exports.createOne = function (req, res) {
	db.insert(req.body)
};

exports.retrieve = function (req, res) {
	db.find({},function(err,data){
		for(var i = 0 ; i < data.length;i++){

			res.send(data[i])
		}
	})
};

exports.retrieveOne = function (req, res) {
	db.find({},function(err,data){
		res.send(data)		
	})
};

exports.updateOne = function (req, res) {

};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {

};
