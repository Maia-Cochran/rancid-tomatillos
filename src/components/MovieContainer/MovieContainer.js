import React from 'react'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'
import { NavLink } from 'react-router-dom'
// import Carousel from './carousel-rect-rcdev'
// import React, { useState, useEffect} from 'react';
// import Carousel from '../Carousel/Carousel'
import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
// import './swiper/swiper-bundle.css'



SwiperCore.use([Navigation, Pagination]);


const MovieContainer = ( {movies} ) => {
  
  const movieCards = movies.map(movie => {
    return (
      <NavLink className='navlink' to={`/modal/${movie.id}`} key={movie.id}>
        <SwiperSlide key={`slide-${movie[0]}`} tag="li">
        <Card
          logo={logo}
          title={movie.title}
          posterImage={movie.poster_path}
          rating={movie.average_rating.toFixed(1)}
          id={movie.id}
          key={movie.id}
        />
        </SwiperSlide>
      </NavLink>
    )
  })
  // console.log(movieCards)
 
   


  
  return (
    <div className ="movie-container" > 
      <React.Fragment>
        <Swiper tag="section" wrapperTag="ul" id="carousel" navigation pagination>{movieCards}</Swiper>
      </React.Fragment>
    </div>
  )
}


export default MovieContainer