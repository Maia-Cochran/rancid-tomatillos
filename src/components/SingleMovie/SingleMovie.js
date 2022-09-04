import React, { Component } from 'react';
import './SingleMovie.css';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import { getAllData } from '../../api-calls';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ReactPlayer from 'react-player';

let movie;
let videos;

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      video: []
    };
  };
  
  componentDidMount = () => {
    getAllData(`/movies/${this.props.id}`).then(data => {
      this.setState({ movie: [data[0].movie] })
      movie = data[0].movie
    });

    getAllData(`/movies/${this.props.id}/videos`).then(data => {
      this.setState({ video: data[0].videos[0] })
      console.log('data[0].videos', videos)
      videos = data[0].videos
      console.log('data[0].videos', videos)
    })
  };
  
  trailerSlides = () => { 
    let trailerSlides = videos.map(video => {
      return <SwiperSlide className='swiper-slide' key={video.id}> <ReactPlayer className='video' controls={true} height='90%' width='98%' url={`https://www.youtube.com/watch?v=${video.key}`}/> </SwiperSlide>
    })
    return trailerSlides
  };

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
            className="my-swiper-movies"
            slidesPerView={1}
            slidesPerGroup={1}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
        > 
        {this.trailerSlides()}
        </Swiper>
      </div>
      </section>
      )
    }
  }
};

export default SingleMovie;