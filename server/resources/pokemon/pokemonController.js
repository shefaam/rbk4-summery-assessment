var Pokemon = require('./Pokemon');


// Complete each of the following controller methods
exports.createOne = function (req, res) {
	//newinstance.save
	var newPokemon=new Pokemon({
	     number:req.body["number"],
	     name:req.body["name"],
	     types:req.body["types"],
	     imageUrl:req.body["imageUrl"]

	})
		//console.log("pokemooooon",db.models.Pokemon)
	newPokemon.save(function(err,data){
		res.send(data)
	});


};

exports.retrieve = function (req, res) {
Pokemon.find({},function(err,data){
	res.send(data);
})

};

exports.retrieveOne = function (req, res) {
Pokemon.findOne({number:req.url},function(err,data){
	res.send(data);
})
};

exports.updateOne = function (req, res) {
	Pokemon.findAndModify({number:req.url},req.body,function(err,data){
        res.send(data);
	}

};

exports.delete = function (req, res) {
Pokemon.remove({},function(err,data){
	res.send(data);
})
};

exports.deleteOne = function (req, res) {
	Pokemon.remove({number:req.url},function(err,data){
	res.send(data);
})

};
//i know its not the whole url but anyway its not wotrking because mongodb isnt working in the first place.
