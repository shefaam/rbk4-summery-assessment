var mongoose = require('mongoose');
//var Pokemon =mongoose.model('Blog', blogSchema);
// Complete the pokemonSchema below.
var Schema = mongoose.Schema;
//now make new schema for pokemon 
var pokemonSchema = new Schema({
  //number:number and uniue
  number: { type: Number,unique: true },
  //name:string and uniue
  name: { type: String,unique: true },
  //types:array of string
  types: [String],
  //imageUrl: string 
  imageUrl: String
});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon=mongoose.model('Pokemon', pokemonSchema);;

module.exports = Pokemon;
