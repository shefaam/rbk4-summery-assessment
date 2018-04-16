angular.module('pokemon', [])
.component("app",
{
	controller: function($http)
	{
		

	 	// this.allPokemons = $http.get('http://127.0.0.1:3000/pokemon').then(function(){console.log("sucess")}, function(){console.log("error")});

		this.displayAllPokemons = function()
		{
			this.allPokemons = $http({
			method: 'GET',
			url: 'http://127.0.0.1:3000/pokemon'
		    }).then(function success(response) 
			{
	    		response.data.map(function(data1)
	    		{

	    		});

	        });
		}

		this.createNewPokemon = function()
		{
			var tmp = $("#types").val();
			tmp = tmp.split(',');
			var pokemonInfo = {
					number : $("#number").val(),
					name: $("#name").val(),
					types: tmp,
					imageUrl: $("#imageUrl").val()
			};

			var newPokemon = $http({
								method: 'POST',
								url: 'http://127.0.0.1:3000/pokemon',
								data: JSON.stringify(pokemonInfo)
							    }).then(function success(response) 
								{
						    		console.log(response.data);
						    		//this.allPokemons = response.data;
						        });
			console.log(newPokemon);			 
		}
	},
	template: `<a ng-click='$ctrl.displayAllPokemons()' herf="http://127.0.0.1:3000/pokemon">Display All added Pokemons</a><br><br> \
				<display-pokemons allPokemons="$ctrl.allPokemons"></display-pokemons>
				<h3>Add New Pokemon</h3> \
				Number: <input type="text" id="number"> <br> \
				Name:   <input type="text" id="name"> <br>
				Types:  <input type="text" id="types"> <br> \
				Image:  <input type="text" id="imageUrl"> <br> \
				<button ng-click='$ctrl.createNewPokemon()'>Create New Pokemon</button>\ `
});
