import React from 'react';

class PokemonDisplay extends React.Component {
	constructor(props) {
    	super(props);
 	}
 	render(){
 		var pokemon = this.props.pokemon;
 		var name = pokemon.name;
 		var number = pokemon.number;
 		var image = pokemon.imageUrl;
 		var types = []
 		pokemon.types.forEach(function(type,index) {
 			types.push(<li key = {index}>{type}</li>)
 		})
 		return (
 			<div className="border">
 				<h3>{name}</h3>
 				<h5> Pokemon number : {number} </h5>
 				<h5> Pokemon Type : </h5>
 				<ul>{types}</ul>
 				<img src={image}  />
			</div>		
 		)
 	}
} 

export default PokemonDisplay;