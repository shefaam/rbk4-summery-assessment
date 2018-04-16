var Pokemon = require('./Pokemon.json');
var db = require ('../db');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	db.post({number:Number},
		res.send(JASON))
};

exports.retrieve = function (req, res) {
	db.get(req.body.number)
};

exports.retrieveOne = function (req, res) {
 db.get('/',{number:1})
};

exports.updateOne = function (req, res) {
 db.find(req.body.number)
 db.put({number:Number,name:String,types:String,imageUrl:String})
};

exports.delete = function (req, res) {
	db.remove(body.number)
};

exports.deleteOne = function (req, res) {
 db.find(req.body.number,
 	db.remove(req.body.number))
};
