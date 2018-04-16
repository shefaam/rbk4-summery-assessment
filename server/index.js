var app = require('./server.js');
var port = 3000;
var mongoose = require('mongoose');


app.listen(port, function () {
  console.log('Poke-MongoDB RESTful API listening on port ' + port);
});


var Schema= mongoose.Schema,
  ObjectId=	Schema.ObjectId

var Pokemon= new Schema({
	
})