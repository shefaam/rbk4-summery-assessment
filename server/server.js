var express = require( 'express' );
var   bodyP = require( 'body-parser' );
var  morgan = require( 'morgan' );
var      db = require( './db' );
var    path = require( 'path' )
var pokemon = require( "./resources/pokemon/pokemon.js" )
var limiter = require( './middleware/rateLimiter.js' )
// Import the pokemonRouter and assign it to the correct route:
var  pRoute = require( "./resources/pokemon/pokemonRouter.js" )
// Create the Express application:
var     app = express();
// Attach middleware:  
app.use( bodyP.json() )
app.use( bodyP.urlencoded( { extended: false } ) )
app.use( morgan( 'combined' ) )
app.use( limiter )
app.use( express.static( path.join( __dirname + "react-client/src" ) ) )
// ----------------------------------------------------------------


app.get('/', function ( req, res ) {
	pokemon.Pokemon.find( function( err,data ){
		if( err ){
			console.log( "err" )
		}
			res.send( data )
			} )	
	// console.log( 'hell' )
});
app.get('/created', function ( req, res ) {

});
app.get('/retrieve', function ( req, res ) {

});
app.get('/delete', function ( req, res ) {

});
app.get('/update', function ( req, res ) {

});


module.exports = app;
