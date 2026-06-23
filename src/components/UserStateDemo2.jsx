import React, { useState } from 'react'

export const UserStateDemo2 = () => {
    const[count,setCount] = useState(0)

    const increaseCount = ()=>{
        setCount(count+1)
        console.log("Count increased")
    }
  return (
    <div> 
        <h1>UserStateDemo2 </h1>
       <h1>Count = {count}</h1>
       <button onClick={increaseCount}>Increase count</button>
        
        </div>
  )
}
