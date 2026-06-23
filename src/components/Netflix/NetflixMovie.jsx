import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovie = () => {
    const MovieList = [
        {id:101,name : "Dhurandhar"},
        {id:102,name : "Dhurandhar 2"},
        {id:101,name : "Inception"},
        {id:101,name : "Shutter island"}
    ]
  return (
    <div style={{textAlign : "center"}}>
        <h1>Netflix Movies</h1>
        {
            MovieList.map((mov)=>{
                return <li>
                    <Link to = {`/watch/${mov.name}`}>{mov.name}</Link>
                </li>
            })
        }
        
    </div>
  )
}
