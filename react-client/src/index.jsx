import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


const App = (props) => 
<Starter num={ props.number } />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

onChange(){
  setStaet:false,
poke:'',
}

add(){
 $ajax{
 typof:'POST',
 data:{data:poke},
 url:'/',
 success: function(){
 console.log("success");
 }
 }	
}

const App = (props) => 
<Starter num={ props.number } />;

ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

