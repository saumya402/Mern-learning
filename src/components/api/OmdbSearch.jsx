import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OmdbSearch = () => {
const [movieList, setmovieList] = useState([])
const [movieName, setmovieName] = useState("")
const Searchmovie = async () => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=de9af974&s=${movieName}`)

console.log(res)
console.log(res.data)
setmovieList(res.data.Search)
};
   return (
    <div style={{ textAlign:"center"}}>
      <h1>OmdbSearch</h1>
      <input type="text" onChange={(movies)=>setmovieName(movies.target.value)}></input>
      <button onClick={Searchmovie}>Search Movie </button>
       <div className="row">
      {movieList?.map((movie) => {
        return (
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <h5 className="card-title">{movie.Year}</h5>
                <Link to={`/MovieDetail/${movie.imdbID}`}>View Details</Link>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
