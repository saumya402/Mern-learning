import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const { register, handleSubmit } = useForm()
    const [data, SetDisplay] = useState({})
    const[flag,Setflag] = useState(false)
    const submit = (data) => {
        console.log(data)
        SetDisplay(data)
        Setflag(true)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>FormDemo1</h1>

            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name</label>
                    <input type='text' {...register("name")} />
                </div>
                <div>
                    <label>Age</label>
                    <input type='text' {...register("age")} />
                </div>
                <div>
                    <label>Gender</label><br />

                    Male :
                    <input type='radio'value="Male"
                        {...register("gender")}
                    />
                    <br />
                    Female :
                    <input type='radio'value="Female"{...register("gender")}/>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
           
            </form>
            {flag==true&&
            <div>
            
                     <h1>Name = {data.name}</h1>
                        <h1> Age = {data.age}</h1>
                        <h1> Gender = {data.gender}</h1>
               
            </div>
}

        </div>
    )
}