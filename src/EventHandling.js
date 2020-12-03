// import React from 'react'

// export default class EventHandling extends React.Component{

//     testFun(){
//         alert("Test Function")
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Hello This is Event Handling in ReactJS:- Click Event</h1>
//                 <button onClick={()=>{this.testFun()}}>click Here</button><br></br>
//                 <button onClick={this.testFun.bind(this)}>click Here</button>
//             </div>
//         )
//     }
// }

import React from 'react'

export default function EventHandling (){
    // function testFun(){
    //     alert("test function in Functional Component")
    // }
    const testFun=()=>{
        alert("test function in Functional Component")
    }
        return(
            <div>
                <h1>Hello This is Event Handling in ReactJS:- Click Event</h1>
                <button onClick={testFun}>click Here</button><br></br>
            </div>
        )
}