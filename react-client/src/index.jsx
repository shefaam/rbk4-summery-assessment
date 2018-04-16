import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';

//dont forgit : 
//the binding 
//run the react server 
//close the tag at the render function even if br ,, and keep checking the render function 
// remember to spisify the value by {} ,, on change or on click ,, dep.on if it I/P or button ..  

// Actully we need the bundle.js file which convert from es5 to es6 ,, to deal with react .. 
// i tried to have by : 'npm install -g bundle-js' ,, after i check that the all dependencies are installed ,, and it did not work .. 
const App = (props) => <Starter num={ props.number } />;

class App extends.ReactComponent
{

	constructor (props)
	{
		 super(props)
  		this.state = 
  		{
   			number : '',
   			name : ,
   			types : [],
   			imageUrl : ''
        }

	} 
	this.onChange.bind(this);
} 	

	onChange1(e){
		this.e.target.value
	}
	onChange2(e){
		this.e.target.value
	}
	onChange3(e){
		this.e.target.value
	}
	onChange4(e){
		this.e.target.value
	}


	search (typ){
		return $.ajax({
        url,
        typ: 'this.state.types' ,
        success: function (data) {
            console.log('success');
            
        });

	};

	// i need submit function ,, to add the new pokemon ..


	
	submit(){
		this.setState({
			number : '',
   			name : ,
   			types : [],
   			imageUrl : ''
		})
	} 

	render() {
		return
		<div>
			<p>Pokemon</p>
			Add New Pokemon: <br></br><input value= {this.state.name} onChange ()/>
			<br></br>
			<input type = 'integer' name = 'number' value= {this.state.number} onChange ({this.onChange1})/>
			<input type = 'text' name = 'name' value= {this.state.name} onChange ({this.onChange2})/>
			<input type = 'text' name = 'types' value= {this.state.types} onChange ({this.onChange3})/>
			<input type = 'url' name = 'Image' value= {this.state.number} onChange ({this.onChange4})/>
			<button value ='submit'  onClick ({this.submit}) />
			<input type = 'text' name = 'Enter the type of Pokemon' value = 'search' onClick ({this.search}) onChange ({this.onChange3})/>
		</div>
	} 

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

