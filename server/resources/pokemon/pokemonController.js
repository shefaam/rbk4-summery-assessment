var Pokemon = require('./Pokemon');
var app = express()
var data = body.json()

// Complete each of the following controller methods
exports.createOne = function (req, res) {
//create one table
	app.get('/insertAllPokemon.js', function(data, err){
		if ( err ){
			req.send(err)
			console.log ( 'CREATE ONE ERROR HAS BEEN DETECTED' )
		} else {
			res.send(data)
			console.log ( 'CREATE ONE RESPONSE SUCCESSFUL' )

		};

	});

};

exports.retrieve = function (req, res) {
//find() and retrieve all pokemons
 app.find('/insertAllPokemon', function(data,err){
 	if( err ){
 		console.log ( 'RETRIEVE ERROR HAS BEEN DETECTED')
 	} else {
 		console.log ( 'RETRIEVE HAS BEEN SUCCESSFUL' )
 	}
 })


};

exports.retrieveOne = function (req, res) {
//findOne() and retrieve one pokemons
 app.findOne('/insertAllPokemon', function(data,err){
 	if( err ){
 		console.log ( 'RETRIEVE_ONE ERROR HAS BEEN DETECTED')
 	} else {
 		console.log ( 'RETRIEVE_ONE HAS BEEN SUCCESSFUL' )
 	}
 })
};

exports.updateOne = function (req, res) {
//update one pokemon 
};

exports.delete = function (req, res) {
//delete all specified pokemons
};

exports.deleteOne = function (req, res) {
//delete one pokemon
};
