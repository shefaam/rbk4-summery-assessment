var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	Pokemon.create(req.body , function (err , data) {
		if(err){res.send(err)}
			res.send(data);
	})
};

exports.retrieve = function (req, res) {
	Pokemon.find(function (err , data) {
		if(err){res.send(err)}
			res.send(data)
	})
};

exports.retrieveOne = function (req, res) {
	Pokemon.findOne(function (err , data) {
		if(err){res.send(err)}
			res.send(data)
	})
};

exports.updateOne = function (req, res) {
};

exports.delete = function (req, res) {
	Pokemon.remove(req.body, function (err) {
	  if (err) console.log(err);
	})

};

exports.deleteOne = function (req, res) {
Pokemon.removeOne(req.body, function (err) {
	  if (err) console.log(err);
	})

};
