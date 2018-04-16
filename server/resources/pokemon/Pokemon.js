var mongoose = require('mongoose');
//var Pokemon =mongoose.model('Blog', blogSchema);
// Complete the pokemonSchema below.
var Schema = mongoose.Schema;

var pokemonSchema = new Schema({
  number: { type: Number,unique: true },
  name: { type: String,unique: true },
  types: [String],
  imageUrl: String
});



// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon=mongoose.model('Pokemon', pokemonSchema);;


module.exports = Pokemon;
