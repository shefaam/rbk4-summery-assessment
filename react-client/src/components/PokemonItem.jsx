
import React from 'react';

var PokemonItem = (props) => (
  			
    		<div>
    		<h2>{props.pokemon.name}</h2>
    		<img src={props.pokemon.imageUrl}></img>
    		</div>
  			
       )

export default PokemonItem;