import React from 'react';
class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value1:'',
      value2:'',
      value3:''
  };
      this.onChange=this.onChange.bind(this);
      this.onChange1=this.onChange1.bind(this);
      this.onChange2=this.onChange2.bind(this);
      this.onChange3=this.onChange3.bind(this);
      this.click=this.click.bind(this);
 }
    onChange(e){
    	this.setState({value: e.target.value});
    }
    onChange1(e){
    	this.setState({value1: e.target.value});
    }
    onChange2(e){
    	this.setState({value2: e.target.value});	
    }
    onChange3(e){
    	this.setState({value3: e.target.value});
    }
    click(e){
    	e.target.add();
    }	
    


 

  render(){
		return  (
	<div>
      <h1> Pokemom! </h1> 
        Number:<br/>
       <input type="text" value={this.state.value} onChange={this.onChange}/>
       <br/>
       Name:<br/>
	   <input type="text" value={this.state.value1} onChange={this.onChange1}/>
	   <br/>
	     Type:<br/>
	   <input type="text" value={this.state.value2} onChange={this.onChange2}/>
	   <br/>
	     ImageUrl:<br/>
	   <input type="text" value={this.state.value3} onChange={this.onChange3}/>
	   <button onClick={this.click}>
       submit
       </button>
    </div>)
	}
}


export default Starter;