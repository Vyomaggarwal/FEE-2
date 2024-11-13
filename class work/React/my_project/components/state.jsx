import React, { useState } from 'react'

const state  = () => {
    let [count,addcount]=useState(0)
    let handlecount=()=>{
        addcount(count+1)
        console.log(count);
    }
    return(
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={handlecount}>Increase Count</button>
        </div>
    )
}

export default state