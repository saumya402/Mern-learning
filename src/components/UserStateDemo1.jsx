import React from 'react'

export const UserStateDemo1 = () => {
    const test = (x)=>{
        alert("Test is called" + x)
    }
  return (
    <div style={{textAlign : "center"}}>
        <h1>UserState1</h1>
        <button onClick={test}>TEST</button>
         <button onClick={()=>{test(100)}}>TEST 2</button>
    </div>
  )
}