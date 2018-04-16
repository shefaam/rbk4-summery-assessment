import React from 'react';
import ReactDOM from 'react-dom';
import Starter from './components/starter.jsx';
import $ from 'jquery';


// const App = (props) => <Starter num={ props.number } />;

class App extends React.Component {
constructor(props){
super(props)
this.state= {
items: [],
imageUrl: ''
  }
}

// this.onChange=this.onChange.bind(this)
// this.setState=this.setState.bind(this)

onChange(e){
	this.setState({
		[e.target.name]:e.target.value
	})
}


submit(imageUrl){
	$ajax({
     type:'POST',
     url:'/',
     data:{
     	imageUrl:imageUrl
     }

	})

	$ajax({
     type:'GET',
     url:'/',
     success:function(data){
     this.setState({
        items:data
     })
      }

	})
}


  render() {
   <div>
       <input type='text' name ='imageUrl' onChange={this.onChange}/>
       <button onclick={()=>submit(this.state.imageUrl)}></button>
<starter>{this.state.items}</starter>

   </div>

}
}



ReactDOM.render(<App number={ 10 }/>, document.getElementById('app'));

