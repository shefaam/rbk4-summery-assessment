var Pokemon = require('./Pokemon');
var data = require('../data/pokemon.jsons')
// Complete each of the following controller methods
exports.createOne = function ( req, res ) {
	var poke = data.name
	for ( var i = 0; i < data.length; i++ ) {
		if ( !poke ) {
			create( Pokemon.pokemon )
		}
	}
};

exports.retrieve = function (req, res) {
// retrive the data
};

exports.retrieveOne = function (req, res) {

};

exports.updateOne = function (req, res) {

};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {

};