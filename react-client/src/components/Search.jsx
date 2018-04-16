import React from 'react';

class Search extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		type: ''
    	};
    	this.handleChange = this.handleChange.bind(this);
  	 	this.handleSubmit = this.handleSubmit.bind(this);
 	}
 	handleChange(event) {
	    this.setState({type: event.target.value});
	}

	handleSubmit(event) {
		this.props.filterPokemon(this.state.type)
	    event.preventDefault();
	 }

 	render(){
 		return (
 			<div>
 				<form onSubmit={this.handleSubmit}>
			        <label>
			          Type:
			          <input type="text" onChange={this.handleChange} />
			        </label>
			        <input type="submit" value="Submit" />
			     </form>
			</div>		
 		)
 	}
} 

export default Search;