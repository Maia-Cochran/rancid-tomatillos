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


  //  console.log({movieCards})

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
          <SwiperSlide>{movieCards[0]}</SwiperSlide>
          <SwiperSlide>{movieCards[1]}</SwiperSlide>
          <SwiperSlide>{movieCards[2]}</SwiperSlide>
          <SwiperSlide>{movieCards[4]}</SwiperSlide>
          <SwiperSlide>{movieCards[5]}</SwiperSlide>
          <SwiperSlide>{movieCards[6]}</SwiperSlide>
          <SwiperSlide>{movieCards[7]}</SwiperSlide>
          <SwiperSlide>{movieCards[8]}</SwiperSlide>
          <SwiperSlide>{movieCards[9]}</SwiperSlide>
          <SwiperSlide>{movieCards[10]}</SwiperSlide>
          <SwiperSlide>{movieCards[11]}</SwiperSlide>
          <SwiperSlide>{movieCards[12]}</SwiperSlide>
          <SwiperSlide>{movieCards[13]}</SwiperSlide>
          <SwiperSlide>{movieCards[14]}</SwiperSlide>
          <SwiperSlide>{movieCards[15]}</SwiperSlide>
          <SwiperSlide>{movieCards[16]}</SwiperSlide>
          <SwiperSlide>{movieCards[17]}</SwiperSlide>
          <SwiperSlide>{movieCards[18]}</SwiperSlide>
          <SwiperSlide>{movieCards[19]}</SwiperSlide>
          <SwiperSlide>{movieCards[20]}</SwiperSlide> 
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
      className="mySwiper"
      slidesPerView={5}
      slidesPerGroup={6}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      
      // key= {keyOne}
      >   
      <div
          slot="container-start"
          className="parallax-bg"
          // style={{
          //   "background-image":
          //     "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          // }}
          data-swiper-parallax="-23%"
        ></div> 
         <NavLink className='nav' to={`/modal/${movies.id}`} key={movies.title}>   
          <SwiperSlide>{movieCards[21]}</SwiperSlide>
          <SwiperSlide>{movieCards[22]}</SwiperSlide>
          <SwiperSlide>{movieCards[23]}</SwiperSlide>
          <SwiperSlide>{movieCards[24]}</SwiperSlide>
          <SwiperSlide>{movieCards[25]}</SwiperSlide>
          <SwiperSlide>{movieCards[26]}</SwiperSlide>
          <SwiperSlide>{movieCards[27]}</SwiperSlide>
          <SwiperSlide>{movieCards[28]}</SwiperSlide>
          <SwiperSlide>{movieCards[29]}</SwiperSlide>
          <SwiperSlide>{movieCards[30]}</SwiperSlide>
          <SwiperSlide>{movieCards[31]}</SwiperSlide>
          <SwiperSlide>{movieCards[32]}</SwiperSlide>
          <SwiperSlide>{movieCards[33]}</SwiperSlide>
          <SwiperSlide>{movieCards[34]}</SwiperSlide>
          <SwiperSlide>{movieCards[35]}</SwiperSlide>
          <SwiperSlide>{movieCards[36]}</SwiperSlide>
          <SwiperSlide>{movieCards[37]}</SwiperSlide>
          <SwiperSlide>{movieCards[38]}</SwiperSlide>
          <SwiperSlide>{movieCards[39]}</SwiperSlide>
          <SwiperSlide>{movieCards[40]}</SwiperSlide> 
          </NavLink>
      </Swiper>
      </React.Fragment>
      
    </div>
  )
}


export default MovieContainer




// export default MovieContainer