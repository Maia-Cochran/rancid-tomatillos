import React from 'react'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'
import { NavLink } from 'react-router-dom'
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


  const movieSlidesUpper = movieCards.map(movie => {
    return <SwiperSlide>{movie}</SwiperSlide>
  })

  const movieSlidesLower = movieSlidesUpper.slice().reverse()

  const randomBackground = (obj) => {
    let keys = Object.keys(obj);
    let random = obj[keys[(keys.length * Math.random()) << 0]];
    console.log(`random`,random)
    return random
  } 

//   const randomElement = (array) => {
//     let randomIndex = array[Math.floor(Math.random() * 40)]
//     let randomDetails = array[randomIndex]
//     console.log(randomDetails)
//    };
//   //  array1[Math.floor(Math.random() * 40)]
// console.log(randomElement(movies))
//   const randomBackground = randomElement(movies).backdrop_path


  // const backgroundStyle = {
  //   backgroundImage: {randomBackground},
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "contain",
  // }



console.log(`randomBackground`, )
  return (
    <div className="movie-container" >
      <div className="movie-container-backdrop">
        {/* {randomBackground} */}
      </div>
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
      slidesPerView={10}
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
         <NavLink className='nav' to={`/modal/${movies.id}`} >  
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
      slidesPerView={10}
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



