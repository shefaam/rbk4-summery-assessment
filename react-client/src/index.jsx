import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			pokemons:[]
		};
	}
	submit(number,name,types,imageUrl){
	$.ajax({
  		method:"POST",
  		url: "/api/pokemon",
  		data: { number:number ,name: name, types: types,imageUrl : imageUrl },
  		success: function(data){
  			console.log(data);
  		},
  		error:function(err){
  			console.log(err);

  		}

	})
	$.ajax({
  		method:"GET",
  		url: "/api/pokemon",
  		success: function(data){
  			this.setState({
  				pokemons:data
  			})
  			console.log(data);

  		},
  		error:function(err){
  			console.log(err);

  		}

	})

	}

	render() {
    return ( 
    	
    	<Starter add={this.submit}/>
    	
    	);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));

