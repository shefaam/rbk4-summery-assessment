import React from 'react';

class NewPokemon extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		name: '',
    		number: '',
    		image: '',
    		type: [],	
    	};
    	this.handleChangeName = this.handleChangeName.bind(this);
    	this.handleChangeNumber = this.handleChangeNumber.bind(this);
  	 	this.handleSubmit = this.handleSubmit.bind(this);
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
	    this.setState({type: arr});
	}

	handleSubmit(event) {
		var obj = {
			name: this.state.name,
			number: this.state.number,
			image: this.state.image,
			type: this.state.type
		}
		$.ajax({
		  url: '/pokemon',
		  method: 'POST',
		  data: obj
		})
		.done (function (data) {
			console.log(data);
		})
	    // alert('Poke name: ' + this.state.name + ' its number: ' + this.state.number);
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