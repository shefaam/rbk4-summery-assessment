var Pokemon = require('./Pokemon.js');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
// create and save a pokemon to the database
	Pokemon.create({})
};

exports.retrieve = function (req, res) {
// retrieve all pokemon from the database
	Pokemon.find({})
};

exports.retrieveOne = function (req, res,name) {
//select by name
// retrieve one pokemos from the database
Pokemon.find({name:name},function(err,data){
	if(err){
		console.log(err)
	}
	res.send(data)
})
};

exports.updateOne = function (req, res,name,optionsObj) {
//select by name
//change a pokemos's proprety (or properties) and save it in the database
Pokemon.update({name,name},optionsObj)
};

exports.delete = function (req, res) {
	// delete all pokemons for the database
	Pokemon.remove({})
};

exports.deleteOne = function (req, res,name) {
	//select by name
// delete a pokemon from the database
	Pokemon.remove({name:name})
};
