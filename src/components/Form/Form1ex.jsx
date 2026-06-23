import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Form1ex = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("Errors" + errors)
    const [data, SetDisplay] = useState({})
    const [flag, Setflag] = useState(false)
    const submit = (data) => {
        // console.log(data)
        SetDisplay(data);
        Setflag(true);
    }
    const paramList = ["india","usa"]
    const ValidationSchema = {
        namevalidator: {
            required: {
                value: true,
                message: "Name is required **"
            }
        },
        agevalidator: {
            required: {
                value: true,
                message: "Age is required **"
            },
            min: {
                value: 18,
                message: "Min age of the candiate should be 18"
            },
            max: {
                value: 30,
                message: "Max age of the candiate should be 30"
            }
        },
        emailvalidator: {
            required: {
                value: true,
                message: "Email of the candiate is required ** "
            },
            minLength: {
                value: 6,
                message: "Min length of the email candiate should be 6"

            },
            maxLength: {
                value: 30,
                message: "Max length of the candiate should be 30"
            }
        },
        gendervalidator: {
            required: {
                value: true,
                message: "Gender is required for the candiate"
            }
        },
        hobbiesvalidator: {
            validate: (params) => {
                return params.length <= 2 || "Two hobbies of the candiate are required ** "
            },
            required: {
                value: true,
                message: "Hobbies is required for the candiate"
            }
        },
        countryvalidator: {
            required: {
                value: true,
                message: "country is required for the candiate"
            },
            validate: (params) => {
                return params.paramList || "you are not eligible for voting as you are not part of India and usa"
            }
        }


    }
    return (
       <div
  style={{
    width: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff"
  }}
>
            <h1>Form ex 1</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name := </label>
                    <input type='text'{...register("name", ValidationSchema.namevalidator)}></input>
                    {errors.name?.message}
                </div>
                <div>
                    <label>Age := </label>
                    <input type='number'{...register("age", ValidationSchema.agevalidator)}></input>
                    {errors.age?.message}
                </div>
                <div>
                    <label>Email := </label>
                    <input type='text'{...register("email", ValidationSchema.emailvalidator)}></input>
                    {errors.email?.message}
                </div>
                <div>
                    <label>Gender := </label>
                    MALE    <input type='radio' value="male"{...register("Gender", ValidationSchema.gendervalidator)}></input>
                    FEMALE    <input type='radio' value="female"{...register("Gender", ValidationSchema.gendervalidator)}></input>
                    {errors.Gender?.message}
                </div>
                <div>
                    <label>Hobbies := </label> <br></br>
                    Singing := <input type='checkbox' value="Singing"{...register("Hobbies", ValidationSchema.hobbiesvalidator)}></input>
                    Dancing := <input type='checkbox' value="Dancing"{...register("Hobbies", ValidationSchema.hobbiesvalidator)}></input>
                    Writting := <input type='checkbox' value="Writting"{...register("Hobbies", ValidationSchema.hobbiesvalidator)}></input>
                    Playing := <input type='checkbox' value="Playing"{...register("Hobbies", ValidationSchema.hobbiesvalidator)}></input>
                    {errors.Hobbies?.message}
                </div>
                <div>
                    <label>Country := </label>
                    <select {...register("country", ValidationSchema.countryvalidator)}>
                        <option value="">Select ---</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="germany">Germany</option>
                    </select>
                    {errors.country?.message}
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
            {flag && (
  <div
    style={{
  width: "450px",
  margin: "20px auto",
  padding: "20px",
  backgroundColor: "#e3f2fd",
  border: "3px solid #2196f3",
  borderRadius: "15px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
  color: "#333",
  textAlign: "left"
}}
  >
    <h2>NAME : {data.name}</h2>
    <h2>AGE : {data.age}</h2>
    <h2>EMAIL : {data.email}</h2>
    <h2>GENDER : {data.Gender}</h2>
    <h2>HOBBIES : {data.Hobbies}</h2>
    <h2>COUNTRY : {data.country}</h2>
  </div>
)}
        </div>
    )
}
