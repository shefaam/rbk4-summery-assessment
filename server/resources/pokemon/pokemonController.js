var Pokemon = require('./Pokemon');
//i had a problem requireing db 
// var db = require('db');
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
				res.send(data);
			}
	});
};
// this function will retrieve a specific character
exports.retrieveOne = function (req, res) {
	db.Pokemon.findOne({name: req.body.name}, function (err, data){
		if (err){ throw err}
			else { 
				res.send(data);
			}
	});
};
// this function will update the data of the characte
// not sure how to implement it 
exports.updateOne = function (req, res) {
 	db.Pokemon.updateOne(req.body.name, option, changes);
};

// this function will remove the schema from the data base 
exports.delete = function (req, res) {
	db.Pokemon.remove();
};
// this function will delete a specific item of the schema 
exports.deleteOne = function (req, res) {
	db.Pokemon.remove({name: req.body.name})
};
