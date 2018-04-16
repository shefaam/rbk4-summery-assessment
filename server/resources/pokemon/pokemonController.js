var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	res.send('post, createOne')
};

exports.retrieve = function (req, res) {
	res.send('retrieve')
};

exports.retrieveOne = function (req, res) {
	res.send('retrieveOne')
};

exports.updateOne = function (req, res) {
	res.send('updateOne')
};

exports.delete = function (req, res) {
	res.send('delete')
};

exports.deleteOne = function (req, res) {
	res.send('deleteOne')
};
