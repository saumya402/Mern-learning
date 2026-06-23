import React,{useState} from 'react'

export const UserStateDemo3 = () => {
    const[isLoading,setIsLoading] = useState(true)
    const stopLoader = () =>{
        setIsLoading(false)
    }
  return (
    <div>

        <h1>UseStateDemo3</h1>
        {
         isLoading == true &&    <h1>Loading.....</h1>
        }

        <button onClick={stopLoader}>STOP</button>
        
        </div>
  )
}
