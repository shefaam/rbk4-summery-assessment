import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			states:{
			number: 10,
			name:'',
			types:[],
			image:''
		}


      		
    	};
	}

	fetch(){
		$.ajax({
		  type: "GET",
		  url: '/',
		  success: function(){
		  	console.log('done')}
		  
		});

	}

	create(){

	}

	onChange(e){
		var states = this.state.states;
		var name = e.target.name;
		var value = e.target.value;
		states[name]=value;
		this.setState({states})
	}




	render(){
		return(<div>
		<Starter num ={this.state.states.number} />
		<input name= "name" value={this.state.states.name} onChange={this.onChange} placeholder="enter the name"/><br></br><br></br>
		<input name= "types" value={this.state.states.types} onChange={this.onChange} placeholder="enter an array of types"/><br></br><br></br>
		<input name= "image" value={this.state.states.image} onChange={this.onChange} placeholder="enter the imageURL"/><br></br><br></br>
		<input name= "name" value={this.state.states.name} onChange={this.onChange} placeholder="enter the name"/><br></br><br></br>

		<button onClick={this.fetch}> CREATE </button><br></br><br></br>

		<button onClick={this.fetch}> DISPLAY </button>
				

		</div>)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));

