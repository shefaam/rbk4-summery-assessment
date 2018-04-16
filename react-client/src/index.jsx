import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './components/PokemonList.jsx';
import PokemonItem from './components/PokemonItem.jsx';
import $ from 'jquery';


class App extends React.Component{
	constructor(props){
		super(props)

		this.state={
			data:[]
		}

		this.getData=this.getData.bind(this)
	}

	getData(){
		var that=this;
		$.ajax({
			type:'GET',
			url:'/api/pokemons',
			success:function(data){
				console.log(that.state.data)
				that.setState({data:data})
			}
		})
	}
	render(){
		return(
			<div>
			<PokemonList pokemons={this.state.data}/>
			<button onClick={this.getData}>Click</button>
		 
			</div>

			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

