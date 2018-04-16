var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	Pokemon.save(req.body,function(data){
		res.json(data)
	})


};

exports.retrieve = function (req, res) {
	// Pokemon.fetch(function(data){
	// 	res.json(data)
	// })
//res.send('hi')
};

exports.retrieveOne = function (req, res) {
	var num = req.params.number;
	Pokemon.fetchOne(num,function(data){
		res.json(data)
	})

};

exports.updateOne = function (req, res) {
	var num = req.params.number;


};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {
	var num = req.params.number;
	Pokemon.removeOne(num,function(data){
		res.json(data)
		
	})


};


