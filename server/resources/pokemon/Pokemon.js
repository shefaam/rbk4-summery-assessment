var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema = mongoose.Schema({
  number:Number unique: true,
  name: String unique: true,
  types: [String],
  imageUrl: String
});;


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon = mongoose.model('Pokemon',schema);

//create save function to save the model in dataBase
var save = function(data,callback){
  Pokemon.save(function(err,pdata){
  	if(err) return console.error(err);
  	callback(data)
  });
}

module.exports = Pokemon;


