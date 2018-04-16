import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;
 class App extends React.Component{
 	constructor(props){
 		super(props);
 		this.state{
 			isToggleOn:true
 		}
 		this.handelEvent=this.handelEvent.bind(this)
 	}

 }
 getPokemon(){
 	var that=this;
 	$.ajax({
 		type:"GET"
 		url:'index.html',
 		type:data,
 		success:function(){

 		}
 	})
 }

 handelEvent(e){
 	this.setsate(
 		isToggleOn:e.target.value 

 	})
 }
 render(){
 	return(
 		<div Starter num={ props.number }>
 		<input onChange={}
 		<button onClick={this.handelEvent}>this.state.</button>
 		</div>
 		)
 }


ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

