import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Parallax, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const MovieContainer = ( {movies} ) => {
  
  const movieCards = movies.map((movie) => {
    return (
      <Card
        logo={logo}
        title={movie.title}
        posterImage={movie.poster_path}
        rating={movie.average_rating.toFixed(1)}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  const movieSlides = movieCards.map(movie => {
    return <SwiperSlide key={movie.id}>{movie}</SwiperSlide>
  })

  const movieSlidesUpper = movieSlides.filter((movie, index) => index < 20)

  const movieSlidesLower = movieSlides.filter((movie, index) => index > 19)

  const getRandomIndex = (array) => {
    return array[Math.floor(Math.random()*array.length)]; 
  }

  let randomMovie

  const getRandomBackdrop = () => {
    if (movies.length > 0) {
      randomMovie = getRandomIndex(movies)
    }
  }
  getRandomBackdrop();

  return (
    <div className="movie-container">
      <h1 className='new-header'>Rancid Tomatillos</h1>
      {randomMovie !== undefined && <NavLink className='random-movie-title' to={`/singlemovie/${randomMovie.id}`} key={randomMovie.id}>{randomMovie.title}</NavLink>}
      {randomMovie !== undefined && <img className='random-backdrop' src={randomMovie.backdrop_path} alt='featured backdrop'/>}
      <div className="movie-container-backdrop"></div>
      <div className='top-swiper-container'>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        slidesPerView={10}
        slidesPerGroup={5}
        spaceBetween={5}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        key={1}
        >   
          <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
          {movieSlidesUpper} 
        </Swiper>
      </div>
      <div className='bottom-swiper-container'>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Mousewheel, Keyboard]}
        className="mySwiper2"
        slidesPerView={10}
        slidesPerGroup={5}
        spaceBetween={5}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        key={2}
        >   
          <div slot="container-start" className="parallax-bg2" data-swiper-parallax="-23%"></div> 
          {movieSlidesLower}  
        </Swiper>
      </div>
    </div>
  )
}

export default MovieContainer



