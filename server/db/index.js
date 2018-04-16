var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';
var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/pokemon');
// Connect Mongoose to our local MongoDB via URI specified above and   export it belowszs
// var db1 = require('../resources/pokemon/pokemon.js')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});



var save = function(data,callback){
var pokemon = new Pokemon(data)
pokemon.save(function(err,pokemondata){
	if(err){
		callback(err,null)
	}else{
		callback(null,pokemondata)
	}
})

}
// // Connect Mongoose to your local Mongo database in `db/index.js` //done
// - [ ] Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
//   - [ ] `number`, a unique number
//   - [ ] `name`, a unique string
//   - [ ] `types`, an array of strings
//   - [ ] `imageUrl`, a string  //done!

// - [ ] In `insertAllPokemon.js`, write a function that can populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json`, then run the script/invoke the function so that the database is populated.
// - [ ] Complete the controller in `resources/pokemon/pokemonController.js` that interacts with your Pokémon model.
// - [ ] Create a router in `resources/pokemon/pokemonRouter.js` that utilizes each of your controller's methods. Be sure to handle errors appropriately!
// - [ ] Import `pokemonRouter` into `server.js` and assign it to the correct route
// - [ ] Write at least two tests in `test/api-spec.js` that will help assure future developers that the API is working as intended.



module.exports = db;
module.exports.save=save
