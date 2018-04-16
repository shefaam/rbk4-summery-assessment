var Pokemon = require('./Pokemon');


var collection=db.collection('../data/Pokemon.json')
// Complete each of the following controller methods
exports.createOne = function (req, res) {

collection.creatIndex({{number:1,name:'salem'},{type:'image',imageUrl:ghfghrfd.img },function(err,result){
	collection.find({something:anything}.toArray(function(err.result){
	// 	Pokemon.equal(null,err);
	// 	Pokemon.equal(1,collection.length)
	if(err){
		console.log('err')
	}else
	console.log(something,collection.length);
	}))
	collection.findOne({},function(err,item){

	})
})

};

exports.retrieve = function (req, res) {
collection.find().toArray(function(err.docs){
	// Pokemon.equal(null,err)
	// Pokemon.equal(anything, docs.length);
	if(err){
		console.log("error")
	}else
	console.log(anything,docs.length);
	
});
db.close();


};

exports.retrieveOne = function (req, res) {
collection.findone({},function(err,docs){
	Pokemon.equal(null,err);
	Pokemon.equal(null,docs.something);
	Pokemon.equal(anything,docs.something);
	db.close();

});


};

exports.updateOne = function (req, res) {
collection.updateOne({something:anything},function(err,res){
	Pokemon.equal(null,err);
	Pokemon.equal(anything,res);

	collection.findOne({},function(err,item){

	})
})


};

exports.delete = function (req, res) {
// we should do for loop 
collection.drop(function(err,reply){
collection.distinct('').then(function(docs){
	Pokemon.deepEqual([],docs.sort());
	db.close();
})


};

exports.deleteOne = function (req, res) {
collection.distinct('').then(function(docs){
	Pokemon.deepEqual([],docs.sort());
	db.close();
})


};
