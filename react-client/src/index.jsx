import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	arr : []
    };
    this.allPok = this.allPok.bind(this)
  	}

	allPok(){
		var t = this
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/api/pokemon/',
			success(data){
				var array = []
				for(var i = 0; i < data.length; i++){
					array.push(JSON.stringify(data[i]))
				}
				t.setState({arr : data})
				// console.log(data[0].name)
			},
			error(){}

		})
	}

	render(){
	return (<div>
			<Starter num={ this.props.number } arr={this.state.arr}/>
			<button onClick={this.allPok}>All</button>
			<div></div>
			</div>);
	}
}


ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

