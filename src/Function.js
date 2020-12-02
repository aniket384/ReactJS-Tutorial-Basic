import React from 'react'
export default function Function(prop){
    const red = () =>{
        alert("On Click Function")
    }
   return <div>
        <h1 onClick={red}>{prop.text}</h1>
    </div>
}