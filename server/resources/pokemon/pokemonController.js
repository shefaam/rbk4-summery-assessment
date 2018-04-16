var Pokemon = require('./Pokemon');
var db = require('./db');
// Complete each of the following controller methods

// this function shout save some information about a pokemon character
// it use these number , name , types ,imageUrl to create it  
exports.createOne = function (req, res) {
	
};
// this function will retrieve all the character 
exports.retrieve = function (req, res) {
	db.Pokemon.find({}, function (err, data){
		if (err){ throw err}
			else { 
				res.send(data)
			}
	});
};
// this function will retrieve a specific character
exports.retrieveOne = function (req, res) {
	db.Pokemon.findOne({name: req.name}, function (err, data){
		if (err){ throw err}
			else { 
				res.send(data)
			}
	});
};
// this function will update the data of the characte

exports.updateOne = function (req, res) {
 	db.Pokemon.updateOne()
};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {

};
