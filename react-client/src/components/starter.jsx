import React from 'react';
import Item from './Item.jsx';

const Starter = (props) => (
  <div>
    <h1> Press the awesome button below! </h1> 
    {props.arr.map((item) => <Item item={item} key={'k'+item}/>)}
  </div>
);

export default Starter;