import React from 'react'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'


const MovieContainer = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        logo={logo}
        posterImage={movie.poster_path}
        rating={movie.average_rating.toFixed(1)}
        key={movie.id}
      />
    )
  })

  return (
    <div className ="movie-container">
      {movieCards}
    </div>
  )
}


export default MovieContainer