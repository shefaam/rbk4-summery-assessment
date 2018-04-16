import React from 'react';
import PokemonItem from './PokemonItem.jsx';

const PokemonList = (props) => (
  <div>
    {props.pokemons.map((pokemon)=>
    	<PokemonItem 
    	key={pokemon._id}
    	pokemon={pokemon} />
    	)}

  </div>
);

export default PokemonList;