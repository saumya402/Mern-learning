import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const ProductPost = () => {
    const { register, handleSubmit } = useForm()
    const submit = async (data) => {
        const res = await axios.post("https://node5.onrender.com/product/create",data)
        console.log(res)
        console.log(res.data)
        if (res.status === 201 ) {
            // alert("Product added successfully")
            toast.success("Product added")

        }
    }
    return (
        <div>
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" {...register("price")} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" {...register("description")} />
                </div>
                <div>
                    <label>Colors:</label>
                    Blue  <input type='checkbox' value="Blue" {...register("colors")}></input>
                    REd  <input type='checkbox' value="REd" {...register("colors")}></input>
                    Green  <input type='checkbox' value="Green" {...register("colors")}></input>
                </div>
                <div>
                    <label>Size:</label>
                    <input type="text" {...register("size")}/>
                </div>
                <div>
                    <label> Is Available</label>
                    <input type="text" {...register("isAvailable")} />
                </div>
                <div>
                    <label>Unit:</label>
                    <input type="text" {...register("unit")} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

