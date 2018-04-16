import React from 'react';

class Starter extends React.Component{


	constructor(props){
		super(props);
		this.state ={
			number :0,
			name: '',
			types:'',
			image:''
		}
		this.onChange = this.onChange.bind(this)
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangetypes = this.onChangetypes.bind(this)
		this.onChangeImage = this.onChangeImage.bind(this)
		this.Add = this.Add.bind(this)
		this.showPok = this.showPok.bind(this)
	}
onChangeName(e){
		this.setState({
			name:e.target.value
		})
	}
	onChangetypes(e){
		this.setState({
			types:e.target.value
		})
	}
	onChangeImage(e){
		this.setState({
			image:e.target.value
		})
	}

	showPok(){
		this.props.show();
	}
	onChange(e){
		this.setState({
			number:e.target.value
		})
	}
	Add(){
		this.props.send(this.state.number,this.state.name,this.state.types,this.state.image);
	}


render(){
	return (
	  	<div>
    		Number : <input value={this.state.number} onChange={this.onChange}></input>
    		<br/>
    		<br/>
    		Name : <input value={this.state.name} onChange={this.onChangeName}></input>
    		<br/>
    		<br/>
    		Types : <input value={this.state.types} onChange={this.onChangetypes}></input>
    		<br/>
    		<br/>
    		Image : <input value={this.state.image} onChange={this.onChangeImage}></input>
    		<br/>
    		<br/>


    		<button onClick={this.Add}>Add Pokemon</button>
    		<br/>
    		<br/>
    		<button onClick= {this.showPok}>showPok</button>
    		{this.props.poks.map(function(p){
    			return(<h1>{p.number} {p.name} {p.types} <br/> <br/><image src={p.imageUrl}/></h1>)
    		})}
    		
  		</div>	
		)
}

}

export default Starter;