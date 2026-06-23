import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
   const{register,handleSubmit,formState:{errors}}= useForm()
   console.log("errors",errors)
   const submit=(data)=>{
        alert("Form submited...")
        console.log("Data",data)
   }
   const validationSchema = {
    emailvalidator : {
        required : {
            value : true,
            message : "Email is required"
        },
        minLength : {
            value : 6,
            message : "Min length is 6"
        },
        maxLength : {
            value : 30,
            message : "Max Length is 30"
        }
    },
    agevalidator : {
        required : {
            value : true,
            message : "Age is required"
        },
        min : 18,
        message : "Min age should be 18"
    ,
    max : 30,
    message : "max age is 30"
    },
    gendervalidator : {
        required : {
            value : true,
            message : "Gender is required"
        }
    },
    hobbiesvalidator : {
        required : {
            value : true,
            message : "Hobby is required"
        }
    },
    selectvalidator : {
        required : {
            value : true,
            message : "country is required"
        }
    }
   }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo3</h1>
        <form onSubmit={handleSubmit(submit)} >
            <div>
                <label>Name</label>
                <input type='text' {...register("name",{required:{value : true,message:"Name is required *"}})}></input>
                {errors.name ?.message}
            </div>
            <div>
                <label>Email</label>
                <input type='text'{...register("email",validationSchema.emailvalidator)}></input>
                {errors.email?.message}

            </div>
            <div>
                <label>Age</label>
                <input type='nuber'{...register("age",validationSchema.agevalidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>Gender :</label>
              Male :  <input type='radio' value="male" {...register("Gender",validationSchema.gendervalidator)}></input>
              Female :  <input type='radio' value="female" {...register("Gender",validationSchema.gendervalidator)}></input>
              {errors.Gender?.message}
            </div>
            <div>
                <label>Hobbies :=</label>
                <input type='checkbox' value="reading" {...register("hobbies",validationSchema.hobbiesvalidator)}></input> Reading
                <input type='checkbox' value="traveling" {...register("hobbies",validationSchema.hobbiesvalidator)}></input> Traveling 
                <input type='checkbox' value="cooking" {...register("hobbies",validationSchema.hobbiesvalidator)}></input> Cooking
                {errors.hobbies?.message}
            </div>
            <div>
                <label>Country</label>
                <select {...register("country",validationSchema.selectvalidator)}>
                 <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                </select>
                {errors.country?.message}
                
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
