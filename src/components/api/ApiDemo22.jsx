import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ApiDemo22 = () => {
   const{register,handleSubmit} = useForm()
   const nav = useNavigate()
   const Submit = async(data)=>{
    console.log(data)
    const res = await axios.post("https://node5.onrender.com/user/user/",data)
   

    console.log(res)
        if(res.status == 200){
            // alert("user addedd....")
            toast.success("User added to data successfully !!!")
            nav("/apidemo1")

        }
   }
  return (
    <div>

        <h1>Form Demo Api </h1>
        <form onSubmit={handleSubmit(Submit)}>
            <div>
            {/* Name of the register should be same as api as it will help not to change the variable name */}
            <label>Name</label>
            <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='text'{...register("email")}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text'{...register("password")}></input>
            </div>
            <div>
                <label>Status</label>
                Active :<input type='radio' value="true" {...register("isActive")}></input>
                NotActive :<input type='radio' value="false" {...register("isActive")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
