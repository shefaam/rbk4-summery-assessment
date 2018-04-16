 import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component{


	constructor(props){
		super(props);
		this.state = {
			pokemons :[]
		}

	}

	addPok(number,name,types,image){
		$.ajax({
			type:'POST',
			url:'/pokemons',
			data : {number:number,name:name,types:types,image:image},
			success:function(data){
				console.log('sdadsadsa',data)
			}
		})
	}

	showPokemon(){
		var that = this;
		$.ajax({
			type:'GET',
			url:'/pokemons',
			
			success:function(data){
				that.setState({
					pokemons:data
				})
			}
		})
	}

	render(){
		return(
			<div>
			<Starter poks = {this.state.pokemons} send={this.addPok.bind(this)} show={this.showPokemon.bind(this)} />
			
			</div>
			)
	}
} 





	ReactDOM.render(<App />, document.getElementById('app'));

