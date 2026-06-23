import React from 'react'
import { useForm} from 'react-hook-form'

export const FormDemo6 = () => {
     const {register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"})

     const submit = (data)=>{
        console.log(data)
     }
     const password = watch("password")

     const ValidationSchema = {
        passwordvalidator : {
            required : {
                value : true,
                message : "Pass is required"
            }
        },
        confirmpassvalidator : {
           validate : (params)=>{
                return password == params || "Both pass should match **"
                // console.log(params)
                // console.log(password)
           }
        }
     }
  return (
    <div>
        <h1>Form Demo6 </h1>
      <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>Passowrd</label>
                <input type='text'{...register("password",ValidationSchema.passwordvalidator)}></input>
                {errors.password?.message}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='text'{...register("confirmpass",ValidationSchema.confirmpassvalidator)}></input>
                {errors.confirmpass?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        
    </div>
  )
}
