import React from 'react';

 class Starter extends Component{
       	constructor(){
       		super();
       		this.state()={
       			name:'',
       			number:'',
       			types:[Grass:'',Poison:'']

       		}
       	}

      } 
       // componentDidMount(){
       // 	fetch()

       }
       addpokemon=() =>(
       	this.setState({name:name,number:number})
)

// i cant foooooocus ^!^ its 3:40pm

const Starter = ({num}) => (
  <div>
    <h1> Pokemom! </h1> 
    {num + 10}
  </div>
);

export default Starter;