import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';

class App extends React.component {
	constructor(props) {
		super(props);
		this.state = {
			result: [];
		}
	}

	showPokemon() {
		$.ajax({
			type: "POST",
			url:"//https://api.pokemon.com/us/",
			data:"",
			success: function(){
				console.log('success');
				this.setState({result: result})
			}
		})
	}



	Add() {
		$.ajax({
			type: "GET",
			url:"//https://api.pokemon.com/us/",
			data:"",
			success: function(){
				console.log('success');
				this.setState({result: result})
			}
		})

	}


	

	onChange() {
		result1 = e.props.value
		this.setState({result: result1})
	}



	render() {
		return (
			<div>
			<button value="showAll" onChange showPokemon = {() => this.props.value} />
			<button value="Add" onChange Add = {() => this.props.value} /> 
			<button value="deleteAll" onChange Add = {() => this.props.value} /> 
			<button value="update" onChange Add = {() => this.props.value} /> 

			<Starter num={ props.number } />;
			</div>
			)
	}
}

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

