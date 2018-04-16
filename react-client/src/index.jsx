import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';

class App extends React.Component{
	render(){
		console.log(this.props)
	}




  $.ajax({
  type: "POST",
  url: '/starter.js',
  data: data,
  });

}
const App = (props) => <Starter num={ props.number } />;

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

//i cant understand what he need here oooooh,and the connection on my pc sooooo slow i wanna cry 