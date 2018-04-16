var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
//create new pokemon
exports.createOne = function (req, res) {
  //make the data inrequest inside var
  var dataReq=req.body
  //then insert this obj inside the data base
  db.Pokemon.insert({
    number: dataReq.number,
    name: dataReq.name,
    types: dataReq.types,
    imageUrl: dataReq.imageUrl
  })
  if(err){
    //when fail in create
    res.send("fail to create this pokemon: " + dataReq.name)
  }
  //after finish create one response to the user sucess
  res.send("success create this pokemon: " + dataReq.name)
};
//retrieve all pokemon
exports.retrieve = function (req, res) {
  /*
	//find in the model all thing and ..the name of data pokemons
  db.Pokemon.find({}, function(err, pokemons) {
    //make var to insert this data inside it (obj map)
    var pokeMap = {};
    //itreate for all the pokemons
    pokemons.forEach(function(pokemon) {
      //take each pokemon and put inside the obj map by his id
      pokeMap[pokemon._id] = pokemon;
    });
    //after finish response to show all of this data to the user
    res.send(pokeMap);  
  });
  */
  //or I think this only
  if(err){
    //when fail in create
    res.send("fail to retrieve all pokemon: " )
  }
  res.send(db.Pokemon.find())
};

//retrieve one pokemon
exports.retrieveOne = function (req, res) {
  //make the name of the pokemon need to retrive it in the request inside var 
  var numberOfPokemon=req.dody.number
  /*
  //find in the model all thing and .. the name of data pokemons
  db.Pokemon.find({}, function(err, pokemons) {
    //make var to insert this data inside it (obj map)
    var pokeMap1 = {};
    //itreate for all the pokemons
    pokemons.forEach(function(pokemon) {
      //if the name og this pokemon equal what need to retreve sho it
      if (pokemon.name===nameOfPokemon) {
      //take this pokemon and put it inside the obj map by his id
      pokeMap1[pokemon._id] = pokemon;
      }
    });
    //after finish response to show this pokemon to the user
    res.send(pokeMap1);  
  });
  */
  //or I think this only
  if (db.Pokemon.find({number:{$eq:numberOfPokemon}})) {
    //if find it retrive it to the user
    res.send(db.Pokemon.find({number:{$eq:numberOfPokemon}}))
  }else{
    //when fail in create
    res.send("fail to retrieve this pokemon: " + numberOfPokemon)
  }
};

//updateOne one pokemon
exports.updateOne = function (req, res) {
  //make the data in request inside var
  var dataReq=req.body
  var numberOfPokemon=req.dody.number
  res.send()
  //then insert this obj inside the data base
  //but with condition if found this pokemon
  if(db.Pokemon.find({number:{$eq:numberOfPokemon}})){
    //but with condition if this data fill change it if not dont change it to any things
    if(dataReq.number){
      db.Pokemon.updateOne({
        number:dataReq.number
      })
    }
    if(dataReq.name){
      db.Pokemon.updateOne({
        name:dataReq.name
      })
    }
    if(dataReq.types){
      db.Pokemon.updateOne({
        types:dataReq.types
      })
    }
    if(dataReq.imageUrl){
      db.Pokemon.updateOne({
        imageUrl:dataReq.imageUrl
      })
    }
    //after finish update one response to the user sucess
    res.send("success update this pokemon: " + dataReq.number)
  //if not found this pokemon  
  }else{ 
    //this pokemon not found
    res.send("fail update cant found this pokemon: " + dataReq.number)
  } 
};

//delete all pokemon
exports.delete = function (req, res) {
  //delete all things inside this collection
  db.Pokemon.remove( { } );
  if(err){
    //when fail in create
    res.send("fail to delete all pokemon: " )
  }
  //after delete response to sucess the delete all pokemons to the user
  res.send("success delete all pokemons"); 
};

//delete one pokemon
exports.deleteOne = function (req, res) {
  //make the name of the pokemon need to delete it in the request inside var 
  var numberOfPokemon=req.dody.number
  if (db.Pokemon.find({ number: { $eq: numberOfPokemon } })) {
    //delete specifict pokimen by condition
    db.Pokemon.remove({ number: { $eq: numberOfPokemon } }) ;
    //after delete response to sucess the delete this pokemons to the user
    res.send("success delete this pokemon: " + numberOfPokemon); 
  }else{
    //this pokemon not found
    res.send("fail to delete because cant found this pokemon: " + numberOfPokemon); 
  }
};
