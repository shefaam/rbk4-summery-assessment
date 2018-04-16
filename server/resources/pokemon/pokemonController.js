var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	Pokemon.Pokemon.create({number:100,name:'aa',types:["Grass",
    "Poison"],imageUrl:'asasdsa'},function(err,data){
    	if(err){
    		res.send(err)
    	}else{
    		res.send(data)
    	}
    })
};

exports.retrieve = function (req, res) {
	Pokemon.Pokemon.find(function(err,data){
		if(err){
			res.send(err);
		}else{
			res.send(data)
		}
	})
};

exports.retrieveOne = function (req, res) {
	Pokemon.Pokemon.find(req.body,function(err,data){
		if(err){
			res.send(err);
		}else{
			for (var i = 0; i < data.length; i++) {
				if(req.body===data[i]){

			res.send(data)
				}
			}
		}
	})

};

exports.updateOne = function (req, res) {
	Pokemon.Pokemon.find(function(err,data){
		if(err){
			console.log(err);
		}else{
			for (var i = 0; i < data.length; i++) {
				if(data[i].number===req.body.number){
					Pokemon.Pokemon.update(data[i],function(err,data){
						res.send(data);
					})
				}
			}
		}
	})
};

exports.delete = function (req, res) {
	Pokemon.Pokemon.delete(function(err,data){
		if(err){
			console.log(err)
		}
		else{
			console.log(data)
		}
	})
};

exports.deleteOne = function (req, res) {
	Pokemon.Pokemon.find(function(err,data){
		if(err){
			console.log(err);
		}else{
			for (var i = 0; i < data.length; i++) {
				if(data[i].number===req.body.number){
					Pokemon.Pokemon.delete(data[i],function(err,data){
						if(err){
							console.log(ess)
						}
						res.delete(data);
					})
				}
			}
		}
	})
};
