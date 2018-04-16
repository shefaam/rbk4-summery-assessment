import React from 'react';
import PokemonDisplay from './PokemonDisplay.jsx';

class PokemonsDisplay extends React.Component {
	constructor(props) {
    	super(props);
 	}
 	render(){
 		var arr = [];
 		var pokemons = this.props.pokemons;
 		pokemons.forEach(function (pokemon, index) {
 			arr.push(<PokemonDisplay pokemon = {pokemon} key={index} />)
 		})
 		return (
 			<div>
 				{arr}
			</div>		
 		)
 	}
} 

export default PokemonsDisplay;