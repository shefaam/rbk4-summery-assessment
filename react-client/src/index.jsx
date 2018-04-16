import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component {

constructor(props){
	super(props)

	this.setState({
		pokemons:[]
	})

	this.sendGet=this.sendGet.bind(this);

 	this.sendGet();

}

sendGet(){
	var that=this;
	$.ajax({
		url:'/',
		type:'GET',

		success:function(data){
			this.setState({
				pokemons:data
			})
			//console.log(data);
		},

		error:function(err){
			console.log(err);
		}
	})

}



render(){
	return(
		<Starter num={this.state.pokemons}/>
		<div>
		{this.state.pokemons.map((pokemon)=>{
			<div>{pokemon.number,pokemon.name}
			<img src={pokemon.imageUrl}/>

		})


	    }

		</div>
		)
}

}



ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

//const App = (props) => <Starter num={ props.number } />;

