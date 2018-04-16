var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema= new pokemonSchema({
number:Number,
name:String,
types:[String],
imageUrl:String,

});

var Pokemon=mongoose.model('Pokemon',pokemonSchema);

var save = function(data,callback){
var poke=new Pokemon(data)
db.poke.save(function(err,data){
if(err){
callback(err,null)
}
callback(null,data)

})

}

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.




module.exports = Pokemon;
