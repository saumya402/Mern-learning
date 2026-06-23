import js from '@eslint/js'
import React from 'react'
import { useForm } from 'react-hook-form'
                                        
export const FormDemo4 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("Error", errors)
    const submit = (data) => {
        console.log("Data", data)
    }
    const validationSchema = { 
        namevalidator: { 
            required: { 
                value: true,
                message: " ** Name is required"
            }
        },
        emailvalidator: {
            required: {
                value: true,
                message: " ** Email is Required"
            },
            minLength: {
                value: 6,
                message: "Min 6 length is required"
            },
            maxLength: {
                value: 30,
                message: "Max 30 Length is required"
            }
        },
        agevalidator: {
            required : {
                value : true,
                message : " ** Age is required"
            },
            min : {
                value : 18,
                message : "Min age should be 18"
            },
            max : {
                value : 30,
                message : "Max age is 30"
            }

        },
    }
    return (
        <div>
            <h1>Form Demo 4</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name</label>
                    <input type='text' {...register("name", validationSchema.namevalidator)}></input>
                    {errors.name?.message}
                </div>
                <div>
                    <label>Email</label>
                    <input type='text'{...register("email", validationSchema.emailvalidator)}></input>
                    {errors.email?.message}
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' {...register("age", validationSchema.agevalidator)}></input>
                    {errors.age?.message}
                </div>
                <div>
                    <input type='submit'></input>
                </div>

            </form>
        </div>
    )
}
