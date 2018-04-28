import React from 'react';
import Pokemon from './Pokemon';
import $ from 'jquery'
class Starter extends React.Component {
	 constructor(props) {
    super(props);
    this.state={
    	pokemons:[],
  pokemonname:"",
  pokemonnumber:1,
    }
}
getData(){
	var that=this
	$.ajax({
		url:"/api/pokemon"
		type:"GET",
		success:function(data){
			that.setState({
				pokemons:data
			})
		}
	})
}
onChangename(e){
	this.setState({
				pokemonname:e.target.value
			})
	onChangenumber(e){
	this.setState({
				pokemonnumber:e.target.value
			})
}
saveData(){
	var that=this
	$.ajax({
		url:"/api/pokemon"
		type:"Post",
		data:{
  number: that.state.pokemonnumber,
  name: that.state.pokemonname,
  types: [
    "Grass",
    "Poison"
  ],
  imageUrl: "http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en"
  }
		success:function(data){
			that.setState({
				pokemons:data
			})
		}
	})
}
	render(){
		<div>
		<div>
			<button onClick={this.saveData.bind(this)}>add new pokemon</button>
			<h1>pokemon name<h1><input type="text" onChange={this.onChangename.bind(this)} />
			<h1>pokemon number<h1><input type="text" onChange={this.onChangenumber.bind(this)} />
		</div>
		{this.state.pokemons.map((pokemon)=>{
			<h1>{pokemon.name}</h1>
			<img src={pokemon.imageUrl}/>
		})}
	
		  </div>


	}

}
export default Starter;