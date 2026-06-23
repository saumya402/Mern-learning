import axios from 'axios';
import React, { use } from 'react'
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
    const moviename = useParams().moviename

    const getMovieDetail = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=de9af974&i=${moviename}`)
    console.log(res.data)
    };
  return (
    <div>
        <h1>Movie Detail = {moviename}</h1>
        <button onClick={getMovieDetail}>Get Details of the movie</button>

    </div>
  )
}
