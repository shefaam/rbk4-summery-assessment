var Pokemon = require('./Pokemon');
var app = express()

// Complete each of the following controller methods
exports.createOne = function (req, res) {
var data = body.json()
	app.get('/insertAllPokemon.js', function(data, err){
		if ( err ){
			req.send(err)
			console.log ( 'ERROR HAS BEEN DETECTED' )
		} else {
			res.send(data)
			console.log ( 'RESPONSE SUCCESSFUL' )

		}

	})

};

exports.retrieve = function (req, res) {
//find()
};

exports.retrieveOne = function (req, res) {
//findOne()
};

exports.updateOne = function (req, res) {

};

exports.delete = function (req, res) {

};

exports.deleteOne = function (req, res) {

};
