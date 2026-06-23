import React, { useMemo, useState } from 'react'

export const UseMemoDemo1 = () => {
    const[count,setcount]=useState(0)
    const [count2,setcount2]=useState(100)

    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[count2])

  return (
    <div>
        <h1>UseDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={()=>setcount(count+1)}>+</button>
        <h1>Count2 = {count2}</h1>
        <button onClick={()=>setcount2(count2+1)}>+</button>
        <h1>Random No = {randomNo}</h1>


    </div>
  )
}
