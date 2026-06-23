import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShow = () => {
  return (
    <div style={{textAlign : "center"}}> <h1>NetflixShow </h1>
    <li>
     <ul><Link to="/Watch/friends">Friends</Link></ul>
     <ul><Link to="/Watch/Moneyheist">Money heist</Link></ul>
     <ul><Link to="/Watch/Breaking bad">Breaking bad</Link></ul>
     <ul><Link to="/Watch/Dark">Dark</Link></ul>

    </li>
    </div>
  )
}
