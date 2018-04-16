import React from 'react';

class NewPokemon extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		name: '',
    		number: '',
    		image: '',
    		types: [],	
    	};
    	this.handleChangeName = this.handleChangeName.bind(this);
    	this.handleChangeNumber = this.handleChangeNumber.bind(this);
  	 	this.handleSubmit = this.handleSubmit.bind(this);
  	 	this.handleChangeTypes = this.handleChangeTypes.bind(this);
  	 	this.handleChangeImage = this.handleChangeImage.bind(this);
 	}

 	handleChangeName(event) {
	    this.setState({name: event.target.value});
	}

	handleChangeNumber(event) {
	    this.setState({number: event.target.value});
	}

	handleChangeImage(event) {
	    this.setState({image: event.target.value});
	}
	handleChangeTypes(event) {
		var arr = event.target.value.split(' ');
	    this.setState({types: arr});
	    console.log(this.state.types)
	}

	handleSubmit(event) {
		var obj = {
			name: this.state.name,
			number: this.state.number,
			imageUrl: this.state.image,
			types: this.state.types
		}
		console.log('handleSubmit',obj)
		this.props.addPokemon(obj)
	    event.preventDefault();
	 }

 	render(){
 		return (
 			<div>
 				<form onSubmit={this.handleSubmit}>
			        <label>
			          Name:
			          <input type="text" onChange={this.handleChangeName} />
			        </label>
			        <label>
			          Number:
			          <input type="text" onChange={this.handleChangeNumber} />
			        </label>
			        <label>
			          type:(seperate by spaces)
			          <input type="text" onChange={this.handleChangeTypes} />
			        </label>
			        <label>
			          image URL:
			          <input type="text" onChange={this.handleChangeImage} />
			        </label>
			        <input type="submit" value="Submit" />
			     </form>
			</div>		
 		)
 	}
} 

export default NewPokemon;