import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';
import data from '../data/pokemon.json'


// const App = (props) => <Starter num={ props.number } />;
class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			pokemons:[],
			pokemon:''
		}
		this.fetch=this.fetch.bind(this)
		this.onChang=this.onChang.bind(this)


	}
	fetch(){
		$.ajax({
			type:'GET'
			url:'/',
			data:data,
			success:function (data) {
				console.log(data)
			}
			 error: function (xhr, ajaxOptions, thrownError) {
				    alert(xhr.status);
				    alert(thrownError);
  }

		})
	}
	fix(poke){
		$.ajax({
			type:'POST'
			url:'/api/pokemon',
			data:this.setState({
				this.state.pokemons.push(poke)
			}),
			success:function (data) {
				console.log('data is posted ')
			}
			 error: function (xhr, ajaxOptions, thrownError) {
				    alert(xhr.status);
				    alert(thrownError);
  }

		})
	}
	onChang(e){
		this.setState({
			this.state.pokemons
		})
	}

	
	render(){
	return(
		<div>
		<Starter />
		</div>
		)
}
}

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

