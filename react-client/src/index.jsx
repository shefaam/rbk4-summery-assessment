import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component{


	constructor(props){
		super(props);

	}

	sendUser(user){
		$.ajax({
			type:'POST',
			url:'/pokemons',
			data : {user:user},
			success:function(data){
				console.log(data)
			}
		})
	}

	render(){
		return(

			<Starter send={this.sendUser.bind(this)} />

			)
	}
} 





ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

