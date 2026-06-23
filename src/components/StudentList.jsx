import React from 'react'

export const StudentList = (props) => {
    console.log("StudentList..",props)
  return (
    <div>
        <h1>StudentList </h1>
        <h1>Name :{props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h1>Student Name = {props.stu.name}</h1>

        {props.subjcets.map((s)=>{
          return <li>{s}</li>
        })}
        <h1>{props.sales}</h1>
       <button onClick={()=>{props.setsales(200)}}>Change the value</button>

    </div>
  )
}
