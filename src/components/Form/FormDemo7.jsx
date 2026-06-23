import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const {register,handleSubmit,formState:{errors},trigger} = useForm()
     const[step,setstep]=useState(1)
     const submit = (data) => {
        console.log(data)
     }
     
      const validationSchema ={
        nameValidator:{
            required:{
                value:true,
                message:"name is required *"
            }
        },
         emailValidator:{
            required:{
                value:true,
                message:"email is required *"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required *"
            }
        }

    }

    const next = async()=>{
        const valid = step == 1 ? await trigger(["name","age"]) : await trigger("email")
        if(valid){
            setstep(step+1)
        }
    }

  return (
    <div>
        <h1>Form Demo 7 </h1>
        <form onSubmit={handleSubmit(submit)}>
              {
                step == 1 && (
                    <div>
                        <div>
                            <label>Name</label>
                            <input type='text'{...register("name",validationSchema.nameValidator)}></input>
                            {errors.name?.message}
                        </div>
                        <div>
                            <label>Age</label>
                            <input type='text'{...register("age",validationSchema.ageValidator)}></input>
                            {errors.age?.message}
                        </div>
                        <div>
                        <button onClick={next}>Next</button>
                        </div>
                    </div>
                )
              }
              {
               step==2 && <div>
                    <div>
                        <label>Email</label>
                        <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                        {errors.email?.message}
                    </div>
                    <div>
                        <button onClick={()=>{setstep(step-1)}}>back Button</button>
                        <input type='submit'></input>
                    </div>
                </div>
}
        </form>

    </div>
  )
}
