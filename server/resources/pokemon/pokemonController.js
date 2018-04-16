var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
db.Pokemon.insert(req)
};

exports.retrieve = function (req, res) {
db.Pokemon.find(req)
};

exports.retrieveOne = function (req, res) {
db.Pokemon.findOne(req)
};

exports.updateOne = function (req, res) {
db.Pokemon.put(req)
};

exports.delete = function (req, res) {
db.Pokemon.remove(req)
};

exports.deleteOne = function (req, res) {
db.Pokemon.remove(req)
};
