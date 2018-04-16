var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db= mongoose.connect;
var Schema = mongoose.Schema;

db.on('err', consloe.error.bind(consloe,'connection error'));
db.once('open' , function(){
	consloe.log("connected");
})
// Complete the pokemonSchema below.

var pokemonSchema =({
	number: Number,
	nmae: String,
	types:[String] ,
	imageUrl: String,
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = new pokemonSchema(); 

module.exports = Pokemon;
