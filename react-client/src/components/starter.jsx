import React from 'react';

class Starter extends React.Component{


	constructor(props){
		super(props);
		this.state ={
			val :''
		}
		this.onChange = this.onChange.bind(this)
		this.clickSend = this.clickSend.bind(this)
	}
	onChange(e){
		this.setState({
			val:e.target.value
		})
	}
	clickSend(){
		this.props.send(this.state.val);
	}


render(){
	return (
	  	<div>
    		<input value={this.state.val} onChange={this.onChange}></input>
    		<button onClick={this.clickSend}>Send User</button>
  		</div>	
		)
}

}

export default Starter;