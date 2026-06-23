import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
    const { register, handleSubmit } = useForm()
    const submit = async (data) => {
        const res = await axios.post("https://node5.onrender.com/user/login", data)
        console.log(res.data.data)
        localStorage.setItem("token", res.data.data)
                                                                                                  
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onClick={handleSubmit(submit)}>
                <div>
                    <label>Email</label>
                    <input type='text' {...register("email")}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='text'{...register("password")}></input>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}
