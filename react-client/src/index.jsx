import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component{
	constructor(props){
		super(props)

		this.state={
			data:''
		}


	}

	getData(){
		var that=this;
		$.ajax({
			type:'GET',
			url:'/api/pokemons',
			success:function(data){
				console.log(data)
				that.setState({data:data})
			}
		})
	}
	render(){
		return(
			<div>
			<div>{this.state.data}</div>
			<button onClick={this.getData.bind(this)}>Click</button>
		 
			</div>

			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

