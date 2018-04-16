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
    this.componentDidMount()
    this.state.items.map((item)=>{
      return <Starter item={item} />
    })

    }
  }


ReactDOM.render(<App/>, document.getElementById('app'));
