import React from 'react'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
// import "./styles.css";
import { Parallax, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import SlideNextButton from '../SlideNextButton/SlideNextButton'

const MovieContainer = ( {movies} ) => {
  
  const movieCards = movies.map((movie) => {
    // console.log(`movie.id`, movie.id)
    return (
        <Card
          logo={logo}
          title={movie.title}
          posterImage={movie.poster_path}
          rating={movie.average_rating.toFixed(1)}
          id={movie.id}
          key={movie.id}
        />
      //  </NavLink>
    )
  })


  const movieSlidesUpper = movieCards.map(movie => {
    return <SwiperSlide>{movie}</SwiperSlide>
  })

  const movieSlidesLower = movieSlidesUpper.slice().reverse()

  
   console.log(`{movieSlidesLower}`,{movieSlidesLower})

  return (
    <div className ="movie-container" > 
      <React.Fragment>
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
      slidesPerView={5}
      slidesPerGroup={6}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      >   
      <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div> 
         <NavLink className='nav' to={`/modal/${movies.id}`} key={movies.title}>  
           {movieSlidesUpper} 
         </NavLink>
      </Swiper>
      </React.Fragment>
      <React.Fragment>
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
      slidesPerView={5}
      slidesPerGroup={6}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      >   
      <div
          slot="container-start"
          className="parallax-bg2"
          data-swiper-parallax="-23%"
        ></div> 
         <NavLink className='nav' to={`/modal/${movies.id}`} key={movies.title}> 
           {movieSlidesLower}  
         </NavLink>
      </Swiper>
      </React.Fragment>
      
    </div>
  )
}


export default MovieContainer



