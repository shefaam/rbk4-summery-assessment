var Pokemon = require('./Pokemon');
var db = require('./db');
// Complete each of the following controller methods
exports.createOne = function (req, res) {

//make a new pokeman


};

exports.retrieve = function (req, res) {

//return all the pokeman

};

exports.retrieveOne = function (req, res) {
db.Pokeman.findOne(function(err,data){
if(err){
	console.log(err)
}

res.send(data)
})

};

exports.updateOne = function (req, res) {
	var data=req.body
db.Pokeman.findOneAndUpdate(data,function(err,pokeman){
if(err){
		console.log(err)
	}

	console.log('success')

})

};

exports.delete = function (req, res) {
db.Pokeman.remove(function(err,pokeman){
	if(err){
		console.log(err)
	}

	console.log('success')
})

};

exports.deleteOne = function (req, res) {
db.Pokeman.deleteOne({name:''},function(err,data){
	if(err){
		console.log(err)
	}
	res.send(data)
})
};
