import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
   const { name } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Team PLAYING {name}</h1>
    </div>
  )
}
