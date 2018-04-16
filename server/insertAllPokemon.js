

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
  var dataArray
  var resultArray=[];
  fs.readFile(path.join(__dirname, '../data/pokemon.json'), function read(err, data){ 
    // if erroe 
    if(err){
      //console log this error
      throw err;
    }
    //but all the file contains pokemon data inside array
    //and we use JSON.parse to convert it to obj
    dataArray=JSON.parse(data);
    //itreate for all the data and but the name for the pokemon in array
    for (var i = 0; i < dataArray.length; i++) {
    	db.Pokemon.insert( {
          number: dataArray[i].number,
          name: dataArray[i].name,
          types: dataArray[i].types,
          imageUrl: dataArray[i].imageUrl
    	} )
    }    
  });
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

//invoke this function
insertAllPokemon();





