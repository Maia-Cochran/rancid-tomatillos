import React from 'react'
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
    return <SwiperSlide>{movie}</SwiperSlide>
  })

  const movieSlidesUpper = movieSlides.filter((movie, index) => index < 20)

  const movieSlidesLower = movieSlides.filter((movie, index) => index > 19)

  const getRandomIndex = (array) => {
    return array[Math.floor(Math.random()*array.length)]; 
  }

  const getRandomBackdrop = () => {
    if (movies.length > 0) {
      return getRandomIndex(movies).backdrop_path
    }
  }

  return (
    <div className="movie-container" >
        <img className = 'random-backdrop' src={`${getRandomBackdrop()}`} alt='featured backdrop'/>
      <div className="movie-container-backdrop">
      </div>
      <React.Fragment className='top-swiper-container'>
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
        >   
          <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
          {movieSlidesUpper} 
        </Swiper>
      </React.Fragment>
      <React.Fragment className='bottom-swiper-container'>
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
        slidesPerGroup={6}
        spaceBetween={5}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        >   
          <div slot="container-start" className="parallax-bg2" data-swiper-parallax="-23%"></div> 
          {movieSlidesLower}  
        </Swiper>
      </React.Fragment>
    </div>
  )
}

export default MovieContainer



