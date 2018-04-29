var mongoose = require('mongoose');
// Complete the pokemonSchema below.
/* START SOLUTION */
var pokemonSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  types: [{
    type: String,
  }],
  imageUrl: String,
});
/* ELSE
var pokemonSchema;
END SOLUTION */ 
// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
/* START SOLUTION */
var Pokemon = mongoose.model('Pokemon', pokemonSchema);
/* ELSE
var Pokemon;
END SOLUTION */ 

module.exports = Pokemon;
