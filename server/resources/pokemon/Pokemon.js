var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Complete the pokemonSchema below.

var pokemonSchema = new mongoose.Schema({
	number: {type:Number,unique:true},
	name: {type:String,unique:true},
	types: [String],
	imageUrl: String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.

var Pokemon=mongoose.model('Pokemon',pokemonSchema);

let save =  (data,callback) => {
	let pok = new Pokemon(data);
	pok.save(data,err)
	if(err){
		callback(err)
	}
	else{
		callbcak(null,data)
	}
}

module.exports = Pokemon;
