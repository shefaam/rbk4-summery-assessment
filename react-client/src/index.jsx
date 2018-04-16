import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) =>  ;
class App extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
			<Starter num={ this.props.number }/>
			</div>
			)
	}
} 
ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

