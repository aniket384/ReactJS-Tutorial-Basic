// Props in Functional Component:-

// import React from 'react'

// export default function Props(props){
//     return (
//         <div>
//             <h1>{props.text.name}</h1>
//             <h1>{props.data}</h1>
//         </div>
//     )
// }

// Props in Class Component:-

import React from 'react'

export default class Props extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}