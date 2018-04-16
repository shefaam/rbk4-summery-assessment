var db = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var data = JSON.parse(req.body);
  	  var pokemon= new  db.Pokemon({
  	  	number: data.number,
	    name: data.name,
	 	types: data.types,
		imageUrl: data.imageUrl
		});
  	  pokemon.save(function(data){
  	  	console.log("saved",data)
  	  	res.send(data)

  	  });

};

exports.retrieve = function (req, res) {
	db.Pokemon.find({},function(err,data){
		res.send(data)
	})
};

exports.retrieveOne = function (req, res) {
	myNumber = JSON.parse(req.url.split('/')[1])
	db.Pokemon.findOne({number: myNumber},function(err,data){
		res.send(data)
	})
};

exports.updateOne = function (req, res) {
	myNumber = JSON.parse(req.url.split('/')[1]);
db.Pokemon.find({number: myNumber}, function (err, pokemon) {
  if (err) return handleError(err);

  pokemon = JSON.parse(req.body);
  pokemon.save(function (err, updatedPokemon) {
    if (err) return handleError(err);
    res.send(updatedPokemon);
  });
});
}
exports.delete = function (req, res) {
db.Pokemon.remove({}, function (err) {
  if (err) return handleError(err);
  // removed!
})
};

exports.deleteOne = function (req, res) {
	myNumber = JSON.parse(req.url.split('/')[1])
db.Pokemon.remove({number: myNumber }, function (err) {
  if (err) return handleError(err);
  // removed!
})
};
