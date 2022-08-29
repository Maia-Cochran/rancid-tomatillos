import React from 'react'
import Card from '../Card/Card'
import './Carousel.css'
import logo from '../../images/rancid-tomatillos.png'


const Carousel = ( {movies, selectAMovie} ) => {
  
  const movieCards = movies.map(movie => {
    return (
      <Card
        logo={logo}
        posterImage={movie.poster_path}
        rating={movie.average_rating.toFixed(1)}
        id={movie.id}
        key={movie.id}
        selectAMovie={selectAMovie}
      />
    )
  })
  // console.log(movieCards)

  
  return (
    <div className="movie-poster">
      {movieCards}
     </div> 
  )
}


export default Carousel
