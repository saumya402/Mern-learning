import React from 'react'
import { Link } from 'react-router-dom'

export const Team = () => {
    const teamname = [
        { id: 1, name: "CSK" },
        { id: 2, name: "MI" },
        { id: 3, name: "RCB" },
        { id: 4, name: "KKR" },
        { id: 5, name: "GT" },
        { id: 6, name: "SRH" },
        { id: 7, name: "DC" },
        { id: 8, name: "LSG" },
        { id: 9, name: "PBKS" },
        { id: 10, name: "RR" }
    ];
  return (
    <div style={{textAlign : "center"}}>
        <h1>Team List</h1>
        {
            teamname.map((t)=>{
                return <li>
                    <Link to = {`/TeamDetail/${t.name}`}>{t.name}</Link>
                </li>
            })
        }
        
    </div>
  )
}
