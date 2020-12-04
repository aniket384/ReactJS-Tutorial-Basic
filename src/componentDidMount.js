import React from 'react'
 export default class copmonentDidUpdate extends React.Component {
     constructor(){
         super();
         this.state={
             active:null,
             who:null
         }
     }
     componentDidUpdate(){
         console.warn("Component Did Update")
         if(this.state.who==null){
         this.setState({who:"aniket mishra"})
         }
     }
     render(){
         return(
             <div>
                 <h1>ReactJS - ComponentDidUpdate {this.state.who}</h1>
                 <button onClick={()=>{this.setState({active:"yes"})}}>Activate</button>
             </div>
         )
     }
 }