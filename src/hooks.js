import React, { useState } from 'react'

export default function Hooks(){
    const [count, setCount] = useState(102500)
    return(
        <div>
            <h1>Hook in functional component {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}
