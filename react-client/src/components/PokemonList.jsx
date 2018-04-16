import React from 'react';

const PokeList = (props) => (
  <div>
    {props.pokemons.map((pokemon)=>

    	<PokemonItem pokemon={pokemon}/>

    	)}
  </div>
);

export default PokeList;