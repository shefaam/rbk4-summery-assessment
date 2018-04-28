import React from 'react';
constructor(props){
	super(props)
	this.handleChange=this.handleChange.bind(this)
	this.state={num:' 11'}

}
handleChange(e){
	this.setState({num:e.target.value})
}

const Starter = ({num}) => (
  <div>
    <h1> Pokemom! </h1> 
    { this.num + 10}
  </div>
);

export default Starter;