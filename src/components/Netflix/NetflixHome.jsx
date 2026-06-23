import React from 'react'
import { MyButton } from '../MyButton'
import { Link } from 'react-router-dom'

export const NetflixHome = () => {
  const hometest = (x) =>{
    alert("hometest is called" + x)
  }
  return (
    <div style={{textAlign : "center"}}>
         <h1>NetflixHome</h1>
         <MyButton funName={()=>{hometest(100)}}></MyButton>
        <Link to="/common" state={{ from: 'NetflixHome' }}>Common</Link>

    </div>
   
  )
}
