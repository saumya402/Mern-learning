import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {
    const addUser = async () => {
        const addObj = {
            name: "saumya",
            age: 23,
            email: "saumya@123.com",
            password: "amit123",
            isActive: true,
        }
        const res = await axios.post("https://node5.onrender.com/user/user/",addObj)
        console.log(res)
        console.log(res.data)
    }
    return (
        <div>
            <h1>Api Demo 2</h1>
            <button onClick={addUser}>Add</button>

        </div>
    )
}
