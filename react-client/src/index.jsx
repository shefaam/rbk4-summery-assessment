import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			arr = [];
		};

		retrievePok (){
			$.ajax({
				url : "/api/pokemon",
				type: "POST",
				data :{name:name}
			})
		}


	}
}

const App = (props) => <Starter num={ props.number } />;

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

