import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';

//
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

  }
  // here the ajax request bring the data from the api

  componentDidMount() {
    var x = this
    $.ajax({
      url:'http://127.0.0.1:3000/api/pokemon',
      type: 'GET',
      success: function(data){
        x.setState({items: data})
      },
      error: function(error){
        console.log(error);
      }
    })
  }

  render() {
    //here i want to do the map to pass every item to starter
    this.componentDidMount()
    this.state.items.map((item)=>{
      return <Starter item={item} />
    })

    }
  }


ReactDOM.render(<App/>, document.getElementById('app'));
