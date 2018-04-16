import React from 'react';

const Item = (props) => (
  <div>
    <li>{props.item.name}</li>
    <img style={{width: 200, height: 200}} src={props.item.imageUrl}/>
  </div>
);

export default Item;