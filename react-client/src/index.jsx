import React from 'react';
import ReactDOM from 'react-dom';
import poke from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) =>  ;
class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			pokemons:[],
		}
	}

	render(){
		return (
			<div>
			<poke num={ this.props.number }/>
			</div>
			)
	}
} 
ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

