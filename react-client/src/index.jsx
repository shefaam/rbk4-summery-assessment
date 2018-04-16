import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    number;
    name = '',
    types = [],
    imageUrl = ''

    };
  }

  Display() {

  $.ajax({
  type:'GET',
  url: url,
  success: function(data){
  	this.state.number  = data.number;
    this.state.name = data.name;
    this.state.types = data.types.
    this.state.imageUrl = data.image.Url; 
  }
  error: function(){
   console.log("Error in GET");
  }

  })
}

  update(input) {

  $.ajax({
  type:'POST',
  url: url,
  data = {

  number  = data.number;
  this.state.name = data.name;
  this.state.types = data.types.
  this.state.imageUrl = data.image.Url; 

  }
  success: function(data){
  	this.state.number  = data.number;
    this.state.name = data.name;
    this.state.types = data.types.
    this.state.imageUrl = data.image.Url; 
  }

  error: function(){
   console.log("Error in GET");
  }

  })

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}




const App = (props) => <Starter num={ props.number } />;


ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

