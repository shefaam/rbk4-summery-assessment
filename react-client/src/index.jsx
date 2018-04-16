import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;
 class App extends React.Component{
 	constructor(props){
 		super(props);
 		this.state{
 			Starter
 		}

 	}

 }
 
 render(){
 	return(
 		<div>Starter num={ props.number }
 		</div>
 		)
 }


ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

