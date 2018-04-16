var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

// Create the Express application:
var app = express();



// Attach middleware:

// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

// Import the pokemonRouter and assign it to the correct route:

/////////////////////////////////////////////////////////
app.get('/api/pokemon', function (req, res) {


	res.send('/api/pokemon')
});
///////////////////////////////////////////////////////

app.post('/api/pokemon', function (req, res) 
{
	db.save(req.body , function (err,date) 
	{
		if (err)
		{
			console.log (err);
		}
		console.log(data);
		res.send(data);
	});

  // !! res.send('POST request to the homepage')
});

///////////////////////////////////////////////////////

app.post('/pokemon',function (req, res)
 {
	db.Pokemon.find({},function (err, pk) 
	{
		if(err)
		{
			console.log(err);
		}
		console.log(pk);
		res.send(pk);
	})
});
//
module.exports = app;

//
