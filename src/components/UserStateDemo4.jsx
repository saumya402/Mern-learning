import React, { useState } from 'react'

export const UserStateDemo4 = () => {
    const[user,setUser] = useState({id:100,name:"saumya"})
    const changeUser = () => {
        setUser({id:101,name:"rahul"})
    }
  return (
    <div>
         <h1>UserStateDemo4 </h1>
         <h1> Id = {user.id}</h1>
         <h2>Name = {user.name}</h2>
         <button onClick={changeUser}>Chane the name</button>
    </div>
  )
}
