var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
db.Pokemon.insert(req.body)
};

exports.retrieve = function (req, res) {
db.Pokemon.find(req.body)
};

exports.retrieveOne = function (req, res) {
db.Pokemon.findOne(req.body)
};

exports.updateOne = function (req, res) {
db.Pokemon.put(req.body)
};

exports.delete = function (req, res) {
db.Pokemon.remove(req.body)
};

exports.deleteOne = function (req, res) {
db.Pokemon.remove(req.body)
};
