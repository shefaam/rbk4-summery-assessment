import React from 'react';
import ReactDOM from 'react-dom';
import poke from './components/starter.jsx';
import $ from 'jquery';


const App = (props) => <poke num={ this.props.number }/> ;
// class App extends React.Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			pokemons:[],
// 		}
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<poke />
// 			</div>
// 			)
// 	}
// } 
ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

