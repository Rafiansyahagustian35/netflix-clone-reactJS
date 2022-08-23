import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal)
      setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData();
  }, [])

  // console.log(movie)

  // truncate func for description 
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return(
    <header className="banner" 
      style={{ 
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__content">
        {/* Title */}
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* div > 2 button */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>

      </div>

        {/* banner_fadebottom */}
        <div className="banner__fadebottom" />
        
    </header>
  )
}

export default Banner