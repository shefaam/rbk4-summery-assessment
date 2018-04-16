import React from 'react';

const PokemonItem = (props) => (
  		<div>
    		<p>{props.pokemon.name}</p>
    		<img src={props.pokemon.imageUrl}>
       </div>
);

export default PokemonItem;