import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'

export const ApiDemo1 = () => {
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(false)
    const [SingleUser, setSingleUser] = useState({})
    const [show, setshow] = useState(false)

    const getDetail = async (id) => {
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        // console.log(res)
        setSingleUser(res.data.data)
        setshow(true)
        console.log(res)
    }
    const handleClose = () => {
        setshow(false)
    }

    const getUsers = async () => {
        setloader(true)
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res)
        console.log(res.data)
        console.log(res.data.message)
        setdata(res.data.data)
        setloader(false)


    }
    // use effect is same like useMemo and both are almost syntatically same
    useEffect(() => {
        getUsers()
    }, [])
    const deleteUser = async (id) => {
        const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
        console.log(res)
        if (res.status == 204) {
            toast.error("User Deleted successfully")                    
            getUsers()
        }

    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>API DEMO</h1>
            {
                loader &&
                <h1>Loading...</h1>
            }
            {/* <button onClick={getUsers}>Get</button> */}
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>IsActive</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive ? "Active" : "Not Active"}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => { deleteUser(user._id) }} className='btn btn-danger'>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => { getDetail(user._id) }} className='btn btn-primary'>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>USER DETAIL</Modal.Header>2
                <Modal.Body>
                    <p>NAME OF THE PERSON ={SingleUser.name} </p>
                    <p>AGE OF THE PERSON= {SingleUser.age}</p>
                    ''
                </Modal.Body>
            </Modal>

        </div>
    )
}

