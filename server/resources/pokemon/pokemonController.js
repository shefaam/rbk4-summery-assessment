var db = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var data = req.body;
	// console.log(JSON.stringify(req.body))
	// console.log(JSON.parse(req.body))

	// console.log(data)
  	  var pokemon= new  db.Pokemon({
  	  	number: data.number,
	    name: data.name,
	 	types: data.types,
		imageUrl: data.imageUrl
		});
  	  pokemon.save(function(err,data){
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
// db.Pokemon.find({number: myNumber}, function (err, pokemon) {
//   if (err) return handleError(err);

//   // pokemon.number = req.body.number;
   var types = req.body.types.split(',');
//   // pokemon.imageUrl = req.body.imageUrl;
//   pokemon.name = req.body.name;
//   pokemon.save(function (err, updatedPokemon) {
//     if (err) return handleError(err);
//     res.send(updatedPokemon);
//   });
// });
db.Pokemon.update({number: myNumber}, { $set: { name :req.body.name, imageUrl : req.body.imageUrl, types : types}}, function(err,data){
	res.send(data)
});
}
exports.delete = function (req, res) {
db.Pokemon.remove({}, function (err,data) {
  if (err) return handleError(err);
  res.send(data)
})
};

exports.deleteOne = function (req, res) {
	myNumber = JSON.parse(req.url.split('/')[1])
db.Pokemon.remove({number: myNumber }, function (err,data) {
  if (err) return handleError(err);
  res.send(data)
})
};
