var mongoose = require('mongoose');
//this is api for pokemon
var mongoUri = 'http://pokeapi.co/api/v2/';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect('http://pokeapi.co/api/v2/')

var db=mongoose.cdb.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(req,res) {
   console.log("Connection succeeded.");
 });

var pokemonSchema;
var pokemonSchema=new Schema({
	 "number":{type:Number},
       "name": {type:String},
	  "types": {type:Object}
	     
});


module.exports = db;



