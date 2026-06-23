import React from 'react'

export const Practical = () => {
    var employee = {
        name : "Saumya",
        age : 18,
        active : true
    }
  return (
    <div>
        <h1>Name of the employee : {employee.name}</h1>
        <h2>Age of the employee : {employee.age}</h2>
        <h2>Activity of employee : {employee.active == true ? "Employee is active":"Employee is not active"}</h2>
        
    </div>
  )
}
