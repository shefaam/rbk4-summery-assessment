import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';
class pokemon extends React.component{
	constructor(props){
		super(props);
		this.stat={
			number:0,
			name:,
			type:[],
			Fire:
		}
	}
}
this.addPokemon.bind{this};
this.showPokemon.bind{this};
addPokemon(){

}
showPokemon(){
	
}
render(){
	return(
		<div>
			Name<input type="text" valu="this.stat.name"/>
			<br/>
			Type<input type="text" valu="this.stat.type"/>
			<br/>
			Number<input type="text" valu="this.stat.number"/>
			<br/>
			Fire<input type="text" valu="this.stat.Fire"/>
			<br>
			<button onClick={this.addPokemon}>Add pokemon</button>
			<button onClick={this.showPokemon}>Show pokemon</button>
		</div>	
		)
}


const App = (props) => <Starter num={ props.number } />;

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

