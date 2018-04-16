import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


const App = (props) => <Starter num={ props.number } />;
$.ajax({
	type:"POST",
	
})


ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

