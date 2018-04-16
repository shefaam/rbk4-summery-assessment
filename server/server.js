var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');



// Create the Express application:
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/pokemon',function(req,res){
	if (!req.body) return res.sendStatus(400)
		db.save(req.body,function(err,data){
			if(err){
				console.log("ERROR")
			}else{
				res.send(data)
			}
		})
	res.send('welcome, ' + req.body.name)
	  // res.end(JSON.stringify(req.body))

	})

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/api/pokemon', function (req, res) {
	res.send("Hello Hussein")
	
});

module.exports = app;
