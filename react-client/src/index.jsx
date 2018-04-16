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

sendGet();
}


sendGet(){
	$.ajax({
		url:'pokemon/api',
		type:'GET',

		success:function(data){

			console.log(data);
		}

		error:function(err){
			console.log(err);
		}


	})



}

render(){
	return (
		<Starter num={ this.props.number }
		)

}

}

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

//const App = (props) => <Starter num={ props.number } />;

