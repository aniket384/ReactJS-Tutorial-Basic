import React from 'react'
export default class LifeCycle extends React.Component{
    constructor(){
        super();
        console.warn("Constructor")
    }
    componentDidMount(){
        console.warn("Constructor Did Mount")
    }
    render(){
        console.warn("Render")
        return(
            <div>
                <h1>Life Cycle Methods</h1>
            </div>
        )
    }
}