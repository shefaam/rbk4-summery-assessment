import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';
class App extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
				<h1>heloo from index</h1>
			</div>
			);
	}


}

//const App = (props) => <Starter num={ props.number } />;

ReactDOM.render(<App />, document.getElementById('app'));
// [ ] Display all Pokémon (with their images)
// I have to send ajax git request to the server and the server should gie the data from database and send it again to the client. when the client recive the data he shold but it inside map function to iterate over all the element and display each element of them 

//- [ ] Add a new Pokémon
// will send a ajax POST request to the server containing the information of the pokemon 

//Filter Pokémon based on their type (but NOT on other properties)

// make a <div> for each type of pokemon and show the data of the pokemon in the that div if the pokemon has the same type