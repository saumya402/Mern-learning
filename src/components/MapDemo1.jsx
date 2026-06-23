import React from 'react'

export const MapDemo1 = () => {
    let marks = [10,20,30,40,50]
  return (
    <div>
        {/* <h1>Hello</h1> */}
       {
        
        marks.map((m)=>{
            return <li>{m}</li>
        })
       }
    </div>
  )
}
