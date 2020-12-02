import React from 'react'

export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Aniket',
            email:'aniketmishra384@gmail.com',
            count: 0
        }
    }
    updateState(){
        this.setState({
            name:'Mishra',
            count:this.state.count+100
        })
    }
    render(){
        return(
            <div>
                <h1>Hello This is State in ReactJS. {this.state.name}</h1>
                <h1>Hello This is State in ReactJS. {this.state.email}</h1>
                <h1>Hello This is State in ReactJS. {this.state.count}</h1>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}