import React from 'react'
import Card from '../Card/Card'
import './MovieContainer.css'
import logo from '../../images/rancid-tomatillos.png'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const MovieContainer = ( {movies} ) => {
  
  const movieCards = movies.map((movie) => {
    // console.log(`movie.id`, movie.id)
    return (
      <NavLink className='nav' to={`/modal/${movie.id}`} key={movie.title}>
        
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

  
  return (
    <div className ="movie-container" > 
      <React.Fragment>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>{movieCards}</SwiperSlide>
      </Swiper>
      
      </React.Fragment>
    </div>
  )
}


export default MovieContainer











// ~~~~~~~~~~~~~~~~~~OLD~~~~~~~~~~~~~~~~~

// import React from 'react'
// import Card from '../Card/Card'
// import './MovieContainer.css'
// import logo from '../../images/rancid-tomatillos.png'
// import { NavLink } from 'react-router-dom'
// // import Carousel from './carousel-rect-rcdev'
// // import React, { useState, useEffect} from 'react';
// // import Carousel from '../Carousel/Carousel'
// import { Swiper, SwiperSlide, useSwiper} from 'swiper/react'
// // import { Swiper} from 'swiper/react'
// import  {Navigation, Pagination, Scrollbar} from 'swiper'
// // import './swiper/swiper-bundle.css'
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // SwiperCore.use([Navigation, Pagination]);


// const MovieContainer = ( {movies} ) => {
  
//   const movieCards = movies.map((movie) => {
//     // console.log(`movie.id`, movie.id)
//     return (
//       <NavLink className='nav' to={`/modal/${movie.id}`} key={movie.title}>
        
//         <Card
//           logo={logo}
//           title={movie.title}
//           posterImage={movie.poster_path}
//           rating={movie.average_rating.toFixed(1)}
//           id={movie.id}
//           key={movie.id}
//         />
      
//       </NavLink>
//     )
//   })
//   // console.log(movieCards)
//   // const SlideNextButton = () => {
//   //   const swiper = useSwiper();
  
//   //   return (
//   //     <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
//   //   );
//   // }
//   // Now you can use Swiper
// // const swiper = new Swiper('.swiper', {
// //   // Install modules
// //   modules: [Navigation, Pagination, Scrollbar],
// //   speed: 500,
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },
// //   // ...
// // });

// //  const swiper = () => {new Swiper(
// //   '.swiper', {modules: [Navigation, Pagination, Scrollbar],
// //       speed: 500,
// //       navigation: {
// //         nextEl: '.swiper-button-next',
// //         prevEl: '.swiper-button-prev'
// //       }
// //     })
// //   }
// //   cssMode={true},
// //  navigation,
// //  pagination={{ clickable: true }},
// //  scrollbar={{ draggable: true }},
// //  mousewheel={true},
// //  keyboard={true},
// //  tag="section" ,
// //   wrapperTag="ul" ,
// //   id="carousel" )
  
//   return (
//     <div className ="movie-container" > 
//       <React.Fragment>
//        <Swiper  
//          className='mySwiper'
//          cssMode={true}
//          navigation
//          pagination={{ clickable: true }}
//          scrollbar={{ draggable: true }}
//          modules={[Pagination, Navigation]}
//          mousewheel={true}
//          keyboard={true}
//         //  tag="section" 
//           wrapperTag="ul" 
//           id="carousel" 
//           slidesPerView={3}
//           spaceBetween={50}
        
//           // onSlideChange={() => console.log('slide change')}
//           // onSwiper={(swiper) => console.log(swiper)}
//           // modules={[Navigation, Pagination]}
//           >
//             {/* <SwiperSlide tag="li" onClick={swiper} > */}
//             <SwiperSlide tag="li">
//             {movieCards} 
//             </SwiperSlide>
          
//         </Swiper>
//       </React.Fragment>
//     </div>
//   )
// }


// export default MovieContainer