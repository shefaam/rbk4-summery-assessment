import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;
class App extends React.Component {
constructor(props){
	super(props)
	this.state ={
		inputs: {
			name:'',
			types:'',
			imageUrl:'',
			filter: ''
	},
	number: 152,
	pokemon: []
}
}

onchange(property, e){
	// console.log(property)
	var inputs = this.state.inputs
	// console.log(inputs)
	inputs[property] = e.target.value;
	// console.log(inputs)

this.setState({inputs:inputs })
}

insert(){
	var number = this.state.number;
	this.setState ({
		number : number+1
	});
	$.ajax({
		method: 'POST',
		url: '/api/pokemon',
		data: {number: this.state.number, name: this.state.inputs.name, types:this.state.inputs.types, imageUrl:this.state.inputs.imageUrl},
		success: function (data) {
			alert("added successfully!")
			console.log("success",data)
		}
	})
	
}

search(){
	var that = this;
$.ajax({
		method: 'GET',
		url: '/api/pokemon',
		data: {number: this.state.number, name: this.state.inputs.name, types:this.state.inputs.types, imageUrl:this.state.inputs.imageUrl},
		success: function (data) {
			console.log("success",data)
			that.setState({pokemon : data})
		}
	})
}
filter(){
	var that = this;
$.ajax({
		method: 'GET',
		url: '/api/pokemon',
		data: {number: this.state.number, name: this.state.inputs.name, types:this.state.inputs.types, imageUrl:this.state.inputs.imageUrl},
		success: function (data) {
			var arr = [], filter = that.state.inputs.filter;
			console.log("success",data)
			for (var i = 0; i < data.length; i++) {
				for (var j = 0; j < data[i].types.length; j++) {
					if(data[i].types[j].toLowerCase() === filter.toLowerCase()) arr.push(data[i])
				}
			}
			console.log(filter)
			console.log(arr)
			that.setState({pokemon : arr})
		}
	})
}
back(){
	this.setState({pokemon : []})
}

render(){
	if(!this.state.pokemon.length){
	return (
		<div>
		<h3>Add a pokemon</h3>
		<p>insert the name</p>
		<input value= {this.state.inputs.name} onChange={this.onchange.bind(this,'name')} /><br/>
		<p>insert his types</p>
		<input value= {this.state.inputs.types} onChange={this.onchange.bind(this,'types')} /><br/>
		<p>insert an image url</p>
		<input value= {this.state.inputs.imageUrl} onChange={this.onchange.bind(this,'imageUrl')} /><br/>
		<button onClick = {this.insert.bind(this)}>ADD!</button><br/><br/><br/><hr/>
		<h3>Display All Pokemons :D</h3>
		<button onClick = {this.search.bind(this)}>Display All Pokemons</button><br/><br/><br/><hr/>
		<h3>Filter Pokemons by type</h3>
		<p>insert a type</p><input value= {this.state.inputs.filter} onChange={this.onchange.bind(this,'filter')} /><br/>
		<button onClick = {this.filter.bind(this)}>Display!</button>
		</div>
		)}
	else {
		return (<div><button onClick = {this.back.bind(this)}>Go back to the main page</button>
				{this.state.pokemon.map((monster) =>
					<div><h4>{monster.name}</h4>
					<p> types: {monster.types}</p>
					<img src={monster.imageUrl} /></div>
					)}

			</div>
			)
	}
}
}


ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

