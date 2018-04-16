var Pokemon = require('./Pokemon');
var ObjectID = require('mongodb').ObjectID,
// Complete each of the following controller methods
exports.createOne = function (req, res) {

	db.Pokemon(req.body,function(err,data){
		if(err){
			console.log('Error')
		}else{
			res.send(data)
		}
	})

};

exports.retrieve = function (req, res) {
	
		db.Pokemon.find(function(err,data){
			if(err){
				console.log('error')
			}else{
				res.send(data)
			}
		})
	

};

exports.retrieveOne = function (req, res) {
//findeone! i should find him by id?!
//or maybe number!
db.Pokemon.findOne(req.body,function(err,found){
	if(err){
		console.log('error')
	}else{
		res.send(found.number)
	}
})
};

exports.updateOne = function (req, res) {
// updateone! // i think also i need his id
// db.Pokemon.update(req.body.id,function(err,item){
// 	if(err){
// 		console.log('error')
// 	}
// 	res.json(item)
// })
};

exports.delete = function (req, res) {
//.remove()
	db.Pokemon.remove({},function(err,done){
		if(err){
			console.log('error')
		}else{
			res.send(done)
		}
	})

};

exports.deleteOne = function (req, res) {
//deleteOne() // i need his id!
var Id= req.body.id
 db.Pokemon.deleteOne({'_id': ObjectId(JSON.parse(Id))})




};
// Complete the controller in `resources/pokemon/pokemonController.js` that interacts with your Pokémon model.