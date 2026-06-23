import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Common1 = () => {
       const state = useLocation().state
    
  return (
    <div>
       <Link to={state.from}>Back</Link>
       <h1>Common</h1>
    </div>
  )
}
