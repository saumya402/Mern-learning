import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm()
    const [step, setstep] = useState(1)

    const submit = (data) => {
        console.log("Final Form Data Submitting: ", data)
        setstep(4) 
    }

    const password = watch("password")

    const validationSchema = {
        fnamevalidator: {
            required: { value: true, message: "First name is required * " }
        },
        lnamevalidator: {
            required: { value: true, message: "Last name is required * " }
        },
        agevalidator: {
            required: { value: true, message: "Age is required * " },
            min: { value: 18, message: "Min age required is 18" },
            max: { value: 30, message: "max age required is 30" }
        },
        emailvalidator: {
            required: { value: true, message: "Email is required *" }
        },
        passvalidator: {
            required: { value: true, message: "Password is required *" }
        },
        confirmPassValidator: {
            validate: (value) => {
                return value === password || "Both password and confirm password should match"
            }
        }
    }

   
    const next = async () => {
        let fieldsToValidate = []

        if (step === 1) fieldsToValidate = ['fname', 'lname']
        if (step === 2) fieldsToValidate = ['age', 'email']
        if (step === 3) fieldsToValidate = ['password', 'confirmPassword']

        
        const valid = await trigger(fieldsToValidate)

        if (valid) {
            setstep(step + 1)
        }
    }

    return (
        <div>
            <h1>HomeWork form </h1>
            
            <form onSubmit={handleSubmit(submit)}>
                {
                    step === 1 && (
                        <div>
                            <div>
                                <label>First Name</label>
                                <input type='text' {...register("fname", validationSchema.fnamevalidator)} />
                                <span style={{ color: 'red' }}>{errors.fname?.message}</span>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type='text' {...register("lname", validationSchema.lnamevalidator)} />
                                <span style={{ color: 'red' }}>{errors.lname?.message}</span>
                            </div>
                            <div>
                                <button type="button" onClick={next}>Next</button>
                            </div>
                        </div>
                    )
                }
                {
                    step === 2 && (
                        <div>
                            <div>
                                <label>Age</label>
                                <input type='text' {...register("age", validationSchema.agevalidator)} />
                                <span style={{ color: 'red' }}>{errors.age?.message}</span>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type='text' {...register("email", validationSchema.emailvalidator)} />
                                <span style={{ color: 'red' }}>{errors.email?.message}</span>
                            </div>
                            <button type="button" onClick={() => setstep(step - 1)}>Back Button</button>
                            <button type="button" onClick={next}>Next</button>
                        </div>
                    )
                }
                {
                    step === 3 && (
                        <div>
                            <div>
                                <label>Password</label>
                                <input type='password' {...register("password", validationSchema.passvalidator)} />
                                <span style={{ color: 'red' }}>{errors.password?.message}</span>
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type='password' {...register("confirmPassword", validationSchema.confirmPassValidator)} />
                                <span style={{ color: 'red' }}>{errors.confirmPassword?.message}</span>
                            </div>
                            <button type="button" onClick={() => setstep(step - 1)}>Back Button</button>
                          
                            <button type="submit">Submit Form</button>
                        </div>
                    )
                }
                {
                    step === 4 && (
                        <div>
                            <h2>Form Submitted Successfully!</h2>
                        </div>
                    )
                }
            </form>
        </div>
    )
}