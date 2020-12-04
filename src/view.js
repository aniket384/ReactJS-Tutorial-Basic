import React from 'react'
import ComponentWillunmount from './componentWillUnmount'

export default class View extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:true
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.toggle?
                    <ComponentWillunmount />:null

                }
                <button onClick={()=>{this.setState({toggle: !this.state.toggle})}} >Delete User</button>
            </div>
        )
    }
}