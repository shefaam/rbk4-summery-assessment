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
    		pokemons: []
    	}
    	this.pokemonsRetrive();
    	this.filterPokemon = this.filterPokemon.bind(this);
    	this.addPokemon = this.addPokemon.bind(this);
 	}


 	pokemonsRetrive() {
 		var that = this;
 		$.ajax({
		  url: '/pokemon',
		  method: 'GET'
		})
		.done (function (data) {
			that.setState({
				pokemons : data
			})
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
 		let PokArr = this.state.pokemons
 		let filtered = [];
 		for(var i = 0 ; i < PokArr.length ; i++) {
 			if (PokArr[i].types.includes(type)) {
 				filtered.push(PokArr[i])
 			}
 		}
 		this.setState({
		 	pokemons: filtered
		})
 	}

 	render() {
 		
 		if (this.state.pokemons.length === 0) {
 			return(
 				<div>
 					<h1> Pokemons array is empty </h1>
 					<button onClick={this.pokemonsRetrive.bind(this)}> Show all Pokemons </button>
 				</div>
 			)
 		}
 		return (
 			<div>
 				<button onClick={this.pokemonsRetrive.bind(this)}> Show all Pokemons </button>
 				<Search filterPokemon={this.filterPokemon} />
 				<NewPokemon addPokemon={this.addPokemon} />
	 			<PokemonsDisplay pokemons = {this.state.pokemons} />

	 		</div>
 		)
 	}
} 

ReactDOM.render(<App />, document.getElementById('app'));

