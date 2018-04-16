var Pokemon = require('./Pokemon');
var app = express()
var data = body.json()
// var === the callback information.>>>>>>>>>>>>>>>>>>???
// Complete each of the following controller methods
exports.createOne = function (req, res) {
//create one table
app.get('/', function(callback, err){
	if ( err ){
		// req.send(err)
		console.log ( 'CREATE ONE ERROR HAS BEEN DETECTED' )
	} else {
		/*res.*/callback(res)
		console.log ( 'CREATE ONE RESPONSE SUCCESSFUL' )

	};

});

};

exports.retrieve = function (req, res) {
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>find() and retrieve all pokemons
 app.find('/', function(callback,err){ //('/insertAllPokemon')
 	if( err ){
 		console.log ( 'RETRIEVE ERROR HAS BEEN DETECTED')
 	} else {
 		callback(res)
 		console.log ( 'RETRIEVE HAS BEEN SUCCESSFUL' )
 	}
 });


};

exports.retrieveOne = function (req, res) {
//findOne() and retrieve one pokemons
 app.findOne('/', function(callback,err){ //('/insertAllPokemon')
 	if( err ){
 		console.log ( 'RETRIEVE_ONE ERROR HAS BEEN DETECTED')
 	} else {
 		callback(res)
 		console.log ( 'RETRIEVE_ONE HAS BEEN SUCCESSFUL' )
 	}
 })
};

exports.updateOne = function (req, res) {
//update one pokemon
var that = this; 
app.update('/', function(callback,err){
	if( err ){
		console.log( 'UPDATE ERROR HAS BEEN DETECTED' )
	} else {
		callback(that.res) // use this because of 2 nested funcions....
	}
});
};

exports.delete = function (req, res) {
//delete all specified pokemons
app.delete('/', function(callback,err){
	if ( err ){
		console.log( 'Delete didnt delete because delete doesnt delete' )
	} else {
		callback(res)
		console.log ( 'Delete deletes the deleted deletes' )
	}
});
};

exports.deleteOne = function (req, res) {
//delete one pokemon
app.deleteOne('/', function(callback,err){
	if ( err ){
		console.log( 'Delete didnt delete because delete doesnt delete' )
	} else {
		callback(res)
		console.log ( 'Delete deletes the deleted deletes' )
	}
});

};
