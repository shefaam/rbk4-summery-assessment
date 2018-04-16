var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  var name = req.body.name
  var number = req.body.number
  var types = req.body.types
  var imageUrl = req.body.imageUrl
  var pokemon = new Pokemon({
    name : name,
    number : number,
    types : types,
    imageUrl : imageUrl
  })
  pokemon.save(function(err, data){
    if (err){
      console.log(err);
    }else {
      console.log(data);
    }
  })
  res.json(pokemon)
};

exports.retrieve = function (req, res) {
  Pokemon.find({}, function(err, data){
		if (err){
			res.statusCode(500)
		}
		else {
			res.json(data)
		}
	});
};

exports.retrieveOne = function (req, res) {
  Pokemon.findOne(req.params, function(err, data){
		if (err){
			console.log(err);
		}
		else {
			res.json(data)
		}
	})
};

exports.updateOne = function (req, res) {
  Pokemon.findOne(req.params, function(err, data){
    if (err){
      console.log(err);
    }
    else {
      Pokemon.set(req.body)
      var newData = Pokemon.findOne(req.params, function(err, newData){
        if (err){
          console.log(err);
        }
        else {
          res.json(newData)
        }
      })
    }
  })
};

exports.delete = function (req, res) {
  Pokemon.remove({}, function(err, data){
    if (err){
      console.log(err);
    }else {
      res.json(data)
    }
  })
};

exports.deleteOne = function (req, res) {
  Pokemon.remove(req.params, function(err, data){
		if (err){
			console.log(err);
		}else {
			res.json(data)
		}
	})
};
