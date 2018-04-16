var Pokemon = require('./Pokemon');


// Complete each of the following controller methods
exports.createOne = function (req, res) {
 Pokemon.save(req.body,function(err,data){
 	if(err){
 		console.log('error')
 	}else{
 		res.send(data)
 	}
 })
};

exports.retrieve = function (req, res) {
	Pokemon.find(req.body,function(err,data){
		if(err){
			console.log('error')
		}else{
			res.send(data)
		}
	})
};

exports.retrieveOne = function (req, res) {
	Pokemon.findOne(req.body, function(err,data){
		if(err){
			console.log('error')
		}else{
			res.send(data)
		}
	})
};

exports.updateOne = function (req, res) {
	Pokemon.updateOne(req.body, function(err,data){
		if(err){
			console.log('error')
		}else{
			res.send(data)
		}
	})
};

exports.delete = function (req, res) {
	Pokemon.remove(req.body, function(err,data){
		if(err){
			console.log('error')
		}else{
			res.send(data)
		}
	})

};

exports.deleteOne = function (req, res) {
	Pokemon.removeOne(req.body, function(err,data){
		if(err){
			console.log('error')
		}else{
			res.send(data)
		}
	})

};
