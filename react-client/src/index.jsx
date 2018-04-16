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
    	//this.pokemonsRetrive();
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
		})
 	}

 	filterPokemon(type) {
 		// need to replace all pokemons array with filtered one
 	}

 	render() {
 		if (this.state.pokemons.length === 0) {
 			return(
 				<div>
 					<h1> Pokemons array is empty </h1>
 					<button onClick={ this.pokemonsRetrive() }> Show all pokemons</button>
 				</div>
 			)
 		}
 		return (
 			<div>
 				<Search />
 				<NewPokemon />
	 			<PokemonsDisplay pokemons = {this.state.pokemons} />
	 			<h1>test App</h1>
	 			<button> Show </button>
	 		</div>
 		)
 	}
} 

ReactDOM.render(<App />, document.getElementById('app'));

