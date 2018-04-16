import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	newPokemon:"",
      all:[];
    };
    this.onChange=this.onChange.bind(this);
    this.submit=this.submit.bind(this)
  }
  onChangee){
   this.setState({
    newPokemon:e.target.value;
   })
  }
  GETALL(){
  	$.ajax({
  		url:"/api/pokemon",
  		type:"GET",
  		//data:this.state,
        success:function(data){
          this.setState({all:data})
        }
  	})
  }
render() {
  if(this.state.all.length!=0){
    return (
      {this.state.all.map(pokemon){<Starter num={pokemon.number} image={pokemon.image}/>}}
    }else{
    return (
      <div>
      <Starter num={ props.number } />
      <input type="text" value={this.state.pokemon} onChange={this.onChange}/>
      <button onClick={this.GETALL}/>
      </div>
    );
  }
}
ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));



// const App = (props) => <Starter num={ props.number } />;



//I know I have to define functions for ajax get and post with an input to let the user create a pokemon but i dont have time for even trying though I know I wont do it correctly now //