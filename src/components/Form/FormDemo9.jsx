import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo9 = () => {
    const {register,handleSubmit,control} =useForm({defaultValues :{medicine:[{name : " ",dosage : 0,freq : 0}]}})
    const {append,remove,fields} = useFieldArray({control,name : "medicine"})

    const submit = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            {
               fields.map((f,index)=>{
                return <div>
                    <div>
                        <label>Name :</label>
                        <input type='text'{...register(`medicine.${index}.name`)}></input>
                    </div>
                    <label>Dosage</label>
                    <input type='text'{...register(`medicine.${index}.dosage`)}></input><br></br>
                    <label>Frequency</label>
                    <input type='text'{...register(`medicine.${index}.freq`)}></input><br></br><br></br>
                    <button onClick={() => remove(index)}>Remove</button>
                </div>
                
               })
            }
            <input type='submit'></input><br></br>
        </form>
         <button onClick={()=>{append([{name:"",dosage:0,freq:0}])}}>Add the medicine</button>

    </div>
  )
}
