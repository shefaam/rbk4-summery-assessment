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
			console.log(err)
		}
		res.json(Objdata)
	})

};

exports.retrieve = function (req, res) {
	createOne(req,res){
		Pokemon.save(function (err, product) {
  		if (err) {
  			console.log(err)
  		}
  		res.json(product)
		})
	}
};

exports.retrieveOne = function (req, res) {
		Pokemon.findByName(object.name, function (err, data) {
		retrieve(req,res){
  			if(err){
				console.log(err);
			}
				res.json(data);

		}
		});

	}
};

exports.updateOne = function (req, res) {
	createOne(req,res){
		Pokemon.findOneAndUpdate(object.name, {$set:{name:"lol"}},function(err, data){
    if(err){
        console.log("Something wrong when updating data!");
    }

    res.json(data);
});
	}
};

exports.delete = function (req, res) {
	createOne(req,res){
	Pokemon.remove(object.number, function (err) {
		console.log(err)
	});
	}
};

exports.deleteOne = function (req, res) {
	createOne(req,res){
	Pokemon.deleteOne(object.name, function (err) {
		console.log(err)
	});
	}
};
