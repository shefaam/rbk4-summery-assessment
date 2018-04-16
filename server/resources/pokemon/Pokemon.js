var mongoose = require('mongoose');
// Complete the pokemonSchema below.

// create schema
var pokemonSchema = mongoose.Schema({
  
  number: {type: Number, unique: true},
  name: {type: String, unique: true},
  types: Array,
  imageUrl: String

});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

// create model
var Pokemon = mongoose.model('Pokemon', pokemonSchema);


Pokemon.insertMany(json, function(err,result) {
   if (err) {
     console.log('Error in inserting json file into MongoDB!');
   } else {
     console.log('Success in inserting json file into MongoDB!');
   }
})


Pokemon.create(object, function (err, small) {
  if (err) {
   console.log("Error in create a new record!");
  }
})


Pokemon.findOne(object, function (err, small) {
  if (err) {
   console.log("Error in retrieving data!");
  } else {
  	console.log("Success in retrieving data!");
  }
})


Pokemon.find(function (err, small) {
  if (err) {
   console.log("Error in retrieving data!");
  } else {
  	console.log("Success in retrieving data!");
  }
})


Pokemon.save(object, function (err, small) {
  if (err) {
   console.log("Error in saving data!");
  } else {
  	console.log("Success in saving data!");
  }
})


Pokemon.remove(object, function (err, small) {
  if (err) {
   console.log("Error in deleting data!");
  } else {
  	console.log("Success in deleting data!");
  }
})


Pokemon.remove(function (err, small) {
  if (err) {
   console.log("Error in deleting all data!");
  } else {
  	console.log("Success in deleting all data!");
  }
})


module.exports = Pokemon;
