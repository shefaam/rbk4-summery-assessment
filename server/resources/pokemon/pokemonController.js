var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {

 var object = {
 number : req.number,
 name : req.name,
 types : req.types,
 imageUrl : req.imageURL
};


Pokemon.create(object, function (err, small) {
  if (err) {
   console.log("Error in create a new record!");
  } else { 
    console.log("A new record has been created!");
  }
})


};

exports.retrieve = function (req, res) {

 Pokemon.find(function (err, res) {
  if (err) {
   console.log("Error in retrieving data!");
  } else { 
    console.log("Success in retrieving data!");
  }
})

};

exports.retrieveOne = function (req, res) {

 var object = {
 number : req.number
 };

 Pokemon.findOne(object, function (err, res) {
  if (err) {
   console.log("Error in retrieving data!");
  } else { 
    console.log("Success in retrieving data!");
  }

})

};

exports.updateOne = function (req, res) {

 var object = {
 number : req.number,
 name : req.name,
 types : req.types,
 imageUrl : req.imageURL
};	


 Pokemon.save(object, function (err, res) {
  if (err) {
   console.log("Error in updating data!");
  } else { 
    console.log("Success in updating data!");
  }

})

};

exports.delete = function (req, res) {

 Pokemon.remove(function (err, res) {
  if (err) {
   console.log("Error in deleting all data!");
  } else { 
    console.log("Success in deleting all data!");
  }

})

};

exports.deleteOne = function (req, res) {

 var object = {
 number : req.number
 };

 Pokemon.remove(object, function (err, res) {
  if (err) {
   console.log("Error in deleting data!");
  } else { 
    console.log("Success in deleting data!");
  }

})

};
