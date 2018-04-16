import React from 'react';
import Item from './Item.jsx';

const Starter = (props) => (
  <div>
    <h1> Pokemom! </h1> 
    {props.arr.map((item) => <Item item={item}/>)}
  </div>
);

export default Starter;