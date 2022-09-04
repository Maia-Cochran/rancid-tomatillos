import React, { Component } from 'react';
import './SingleMovie.css';
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'
import { getAllData } from '../../api-calls';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from 'react-player'

let movie;
let videos;
let index = 0;

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      video: []
    }
  }
  
  componentDidMount = () => {
    getAllData(`/movies/${this.props.id}`).then(data => {
      this.setState({ movie: [data[0].movie] })
      movie = data[0].movie
    })
    getAllData(`/movies/${this.props.id}/videos`).then(data => {
      this.setState({ video: data[0].videos[0] })
      videos = data[0].videos
    })
  }


  trailerSlides = () =>{ 
    videos.map(video => {
    return <SwiperSlide>{video}</SwiperSlide>
  })
}

  nextVideo = () => {
    if (index < videos.length - 1) {
    index++
    this.setState({ video: videos[index] })
    }
  }

  previousVideo = () => {
    if (index > 0) {
      index--
      this.setState({ video: videos[index] })
    }
  }

  resetIndex = () => {
    index = 0;
  }

  render = () => {
    if (movie === undefined || videos === undefined) {
      return <p className='loading'>Loading...</p>
    } else {
      return (
      <section className='movie-info'> 
        <NavLink to="/" className='link-to-home'>
          <button className='back-to-home-btn' onClick={this.resetIndex}>X</button>
        </NavLink>
        <img className='single-movie-back-drop' id={movie.id} src={movie.backdrop_path} alt='poster'/>
        <section className='movie-details-container'>
          <img className='single-movie-mini-poster' id={movie.id} src={movie.poster_path} alt='poster'/>
          <div className='movie-details-box'>
            <h2 className='single-movie-title'>{movie.title}</h2>
            {movie.tagline.length > 0 && <p className='tagline'><i>"{movie.tagline}"</i></p>}
            <p className='single-movie-overview'><b>Overview:</b> {movie.overview}</p>
            <p className='single-movie-release-date'><b>Release Date:</b> {dayjs(movie.release_date).format('MMM. D, YYYY')}</p>
            <p className='genres'><b>Related Genres:</b> {(movie.genres).join(', ')}</p>
            <p className='runtime'><b>Runtime:</b> {movie.runtime} minutes</p>
            {movie.budget > 0 && <p className='budget'><b>Budget:</b> ${(movie.budget).toLocaleString('en-US')}</p>}
            {movie.revenue > 0 && <p className='revenue'><b>Box Office Revenue:</b> ${(movie.revenue).toLocaleString('en-US')}</p>}
            <p className='single-movie-rating'><i><b>Avg. Rating: </b>{(movie.average_rating).toFixed(1)}/10</i></p>
          </div>
        </section>
        <div className='video-container'>
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
            modules={[Pagination, Navigation, Mousewheel, Keyboard]}
            className="mySwiperMovies"
            slidesPerView={1}
            slidesPerGroup={1}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
        >   
         <div className="feature-wrapper">
          {/* {videos.length > 0 && <section className='video-box'>  */}
          {this.trailerSlides}
           {/* <ReactPlayer   url={this.trailerSlides}/> */}
          {/* </section>} */}
          </div>
        </Swiper>
      </div>
       
          {/* <iframe className='movie-trailer'
            src={`https://www.youtube.com/embed/${this.state.video.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
          <div className='btn-container'>
            {videos.length > 1 && <p className='video-counter'>{`${index+1}/${videos.length}`}</p>}
            <div className="next-btn-container">
              {videos.length > 1 && index < videos.length - 1 && <button className='next-video' onClick={this.nextVideo} >Next</button>}
            </div>
            <div className='previous-btn-container'>
              {videos.length > 1 && index > 0 && <button className='previous-video' onClick={this.previousVideo} >Previous</button>}
            </div>
          </div> */}
       
      </section>
      )
    }
  }
}

export default SingleMovie


// Broken Video List: //
// The Crimes That Bind //
// Lost Girls and Love Hotels - Vimeo //
// Force of Nature //
// Away video 2&4 //
// Maraton After bad image
// 
//