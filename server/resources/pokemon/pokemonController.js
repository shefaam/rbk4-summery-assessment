var Pokemon = require('./Pokemon');
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
		Pokemon.save(function (err, product) {
  		if (err) {
  			console.log(err)
  		}
  		res.json(product)
		})
	
};

exports.retrieveOne = function (req, res) {
		Pokemon.findByName(object.number, function (err, data) {
  			if(err){
				console.log(err);
			}
				res.json(data);

		
		});
};

exports.updateOne = function (req, res) {
		Pokemon.findOneAndUpdate(object.number, {$set:{number:50}},function(err, data){
    if(err){
        console.log("Something wrong when updating data!");
    }

    res.json(data);
});
};

exports.delete = function (req, res) {
	
	Pokemon.remove(object.number, function (err) {
		console.log(err)
	});
	
};

exports.deleteOne = function (req, res) {

	Pokemon.deleteOne(object.number, function (err) {
		console.log(err)
	});
	
};
