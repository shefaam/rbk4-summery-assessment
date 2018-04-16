import React from 'react';
import ReactDOM from 'react-dom';
import PokemonsDisplay from './components/PokemonsDisplay.jsx';
import Search from './components/Search.jsx';
import NewPokemon from './components/NewPokemon.jsx';

import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		pokemons: [],
    		toDisplay:[]
    	}
    	this.pokemonsRetrive();
    	this.filterPokemon = this.filterPokemon.bind(this)
    	this.addPokemon = this.addPokemon.bind(this)
 	}


 	pokemonsRetrive() {
 		var that = this;
 		$.ajax({
		  url: '/pokemon',
		  method: 'GET'
		})
		.done (function (data) {
			console.log(data);
			that.setState({
				pokemons : data
			})
			that.filterPokemon(null);
		})
 	}

 	addPokemon(obj){
 		var that = this;
 		console.log('AddPokemon Function',obj)
 		$.ajax({
		  url: '/pokemon',
		  method: 'POST',
		  data: obj
		})
		.done (function (data) {
			console.log('Data sent');
			that.pokemonsRetrive()
		})
		.fail(function( jqXHR, textStatus ) {
		  alert( "Request failed: " + textStatus );
		});
 	}

 	filterPokemon(type) {
 		// need to replace all pokemons array with filtered one
 		if (type === null|| type === undefined){
 			this.setState({
 			 	toDisplay: this.state.pokemons
 			})
 		} else {
 			var filtered = [];
 			var pokemons = this.state.pokemons.slice();
 			pokemons.forEach(function (poke) {
 				console.log(hi) 			
 			})
 			// for(var i = 0; i < pokemons.length ; i++){
 			// 	// if ( pokemons[i].types.includes ) {
 			// 	// 	filtered.push(pokemons[i])
 			// 	// }
 			// }
 			console.log(filterd)
 			//alert(type)
 			this.setState({
 			 	toDisplay: filtered
 			})
 		}
 	}

 	render() {
 		if (this.state.pokemons.length === 0) {
 			return(
 				<div>
 					<h1> Pokemons array is empty </h1>
 				</div>
 			)
 		}
 		return (
 			<div>
 				<Search filterPokemon={this.filterPokemon} />
 				<NewPokemon addPokemon={this.addPokemon} />
	 			<PokemonsDisplay pokemons = {this.state.toDisplay} />
	 			<h1>test App</h1>
	 			<button> Show </button>
	 		</div>
 		)
 	}
} 

ReactDOM.render(<App />, document.getElementById('app'));

