var mongoose = require('mongoose');
// i need to connect the databse in pokemon.jason with this fiel ,, to build my schema .. 
var data = require('../data/pokemon.jason');
// Complete the pokemonSchema below.
//be sure what is the path of localhost should be connected to the mongoo
mongoose.connect('mongodb://localhost/pokemon')


var pokemonSchema = mongoose.Schema ({
	number : Number ,
	name : String ,
	types : Array ,
	img : data[obj.imageUrl]

	 //i need to call the url of the image from the pokemon.json 
	// it is an array which contains obj.s ,, and each obj. has a properties for one pokemon ..  


});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon mongoose.model('Pokemon' , pokemonSchema);
var save = function (pok) 
{
	 
var pok = new Pokemon ({number: pok.number, name:pok.name });
 pok.save();
};

var sellectAll () = function (err , data) 
{
	if (err)
	{
		callback(err , null);
	}
	callback(null , err);
}


module.exports = save;
module.exports = Pokemon;
