import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const submit = (data)=>{
        console.log(data)
    }
    const ValidationSchema = {
        refvalidator : {
            required : {
                value : true,
                message : "Ref code is required"
            },
            validate : (params) =>{
                    return params == "insta" || "Ref code is invalid  * "
            }
        },
        hobbiesvalidator : {
            validate : (params) =>{
                    console.log(params)
                    return params.length <= 2 || "Only 2 hobbies are required"
            }
        }
    }
  return (
    <div>
        <h1>Form Demo5</h1>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label>Ref code</label>
                <input type='text' {...register("refcode",ValidationSchema.refvalidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <label>Hobbies</label>
              Reading :  <input type='checkbox' value="reading"{...register("hobbies",ValidationSchema.hobbiesvalidator)}></input>
              Singing :  <input type='checkbox' value="singing"{...register("hobbies",ValidationSchema.hobbiesvalidator)}></input>
              Writting :  <input type='checkbox' value="writting"{...register("hobbies",ValidationSchema.hobbiesvalidator)}></input>
              Playing :  <input type='checkbox' value="playing"{...register("hobbies",ValidationSchema.hobbiesvalidator)}></input>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
