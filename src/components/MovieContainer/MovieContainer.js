import React from 'react'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'
import { NavLink } from 'react-router-dom'
// import Carousel from './carousel-rect-rcdev'
// import React, { useState, useEffect} from 'react';
// import Carousel from '../Carousel/Carousel'



const MovieContainer = ( {movies} ) => {
  
  const movieCards = movies.map(movie => {
    return (
      <NavLink className='navlink' to={`/modal/${movie.id}`} key={movie.id}>
        <Card
          logo={logo}
          title={movie.title}
          posterImage={movie.poster_path}
          rating={movie.average_rating.toFixed(1)}
          id={movie.id}
          key={movie.id}
        />
      </NavLink>
    )
  })
  // console.log(movieCards)

  
  return (
    <div className ="movie-container" >
      {movieCards}
    </div>
  )
}


export default MovieContainer