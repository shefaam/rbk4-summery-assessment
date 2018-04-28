var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	// if the number is exist nod do any thing but if its create new one
	Pokemon.findById('http://pokeapi.co/api/v2/'+id,function(err,data){
	// 	if(!found){
	// 		concole.log('greate')	

	// 	}
	// 	else{
	// 		concole.log('its exist')
	// 	}
	// })

};

exports.retrieve = function (req, res) {
	Pokemon.find('http://pokeapi.co/api/v2/'+id,function(){
		if(err){
			console.log ('not found')
		}
		else{
          res.send('http://pokeapi.co/api/v2/'+id)
		}
	})
		
};

exports.retrieveOne = function (req, res) {
	Pokemon.findById('http://pokeapi.co/api/v2/':id,function(){
			if(err){
			console.log ('not found')
		}
		else{
          res.send('http://pokeapi.co/api/v2/':id)
		}
	}
	})
		
};

exports.updateOne = function (req, res) {


};

exports.delete = function (req, res) {
	user.findByIdAndRemove({_id: 'http://pokeapi.co/api/v2/':id}, 
	   function(err, docs){
		if(err) {
			res.json(err)
		};
	});

};

exports.deleteOne = function (req, res) {
	user.findByIdAndRemove({_id: 'http://pokeapi.co/api/v2/':id}, 
	   function(err, docs){
		if(err) {
			res.json(err)
		};
	});

};
