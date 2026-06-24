import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Item = () => {
    const [item, setitem] = useState([])

    const getData = async () => {
        const res = await axios.get(`https://node5.onrender.com/item`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                // "Authorization": `Bearer ${document.cookie}`
            }
        })
        console.log(res.data)
        setitem(res.data.data);
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h1>Local Storage get</h1>
            {/* <button onClick={getData}></button> */}
            <table className='table table-dark'>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        item.map((i) => {
                            return <tr>
                                <td>{i._id}</td>
                                <td>{i.name}</td>
                                <td>{i.price}</td>
                                <td>{i.color}</td>
                                <td>{i.status ? "Active" : "Not active"}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
