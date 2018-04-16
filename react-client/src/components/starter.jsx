import React from 'react';

const poke = (props) => (
  	<div>
  {props.pokemons.map((pokemon)=>{
  	return(
  		<div>
  			<div>
  				{pokemon.name}
  			</div>
  			<div>
  				<img src={pokemon.imageUrl}/>
  			</div>
  		</div>
  		)
  })}
    
    </div>
);

export default poke;