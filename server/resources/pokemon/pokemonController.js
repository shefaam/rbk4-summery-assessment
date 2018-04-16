var Pokemon = require('./Pokemon');
var bodyParser = require('body-parser')
// Complete each of the following controller methods
exports.createOne = function (req, res) {
var instance=new Pokemon({number:req.body.number,name:req.body.name,types:req.body.types,imageUrl:req.body.imageUrl}
instance.save(function(err,data){
	if(err){res.send(err)}
		else{
			res.send(data)
		}
})
};

exports.retrieve = function (req, res) {
 Pokemon.find({},function(err,data){
	if(!err){
		res.send(data)
	}else{
		res.send(err)
	}

})
};

exports.retrieveOne = function (req, res) {
 Pokemon.findOne({},'number name types imageUrl',function(err,data){
	if(err){
		res.send(err)
	}else{
		res.send(data)
	}
})
};

exports.updateOne = function (req, res) {
	Pokemon.update({number:req.body.number || name:req.body.name || types:req.body.types || imageUrl:req.body.imageUrl},newData,function(err,data){
		if(err){
			res.send(err)
		}else{
			res.send(data)
		}
	})

};

exports.delete = function (req, res) {
	Pokemon.findAll({},function(err,data){
		if(err){res.send(err)}
			else{
				res.remove(data)
			}
	})

};

exports.deleteOne = function (req, res) {
Pokemon.findOneAndRemove({number:req.body.number || name:req.body.name || types:req.body.types || imageUrl:req.body.imageUrl},function(err,data){
	if(err){
		res.send(err)
	}
	else{
		data.remove()
	}
})
};

