import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
const {register,handleSubmit} = useForm()

        const submit = (data)=>{
            console.log(data)
        }
  return (
    <div style={{textAlign : "center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label >Hobbies</label><br></br>
            Sports <input type='checkbox' value="Sports" {...register("hobbies")}  /><br></br>
            Singing<input type='checkbox' value="Singing"{...register("hobbies")}  /><br></br>
            Reading <input type='checkbox' value="reading"{...register("hobbies")}/><br></br>
            Playing <input type='checkbox' value = "Playing "{...register("hobbies")}  /><br></br>
            </div><br></br>
            <div>
                <label>Country</label>
                <select {...register("country")}>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                </select>
            </div>
             <div>
                <input type='submit'></input>
            </div>

        </form>


    </div>
  )
}
