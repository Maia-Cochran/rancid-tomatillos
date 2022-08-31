import React from 'react';
import './Modal.css';
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'

const Modal = ({ movie }) => {
  // const [movie] = props;
  // const {
  //   id,
  //   title,
  //   backdrop_path,
  //   average_rating,
  //   release_date,
  //   overview,
  //   genres,
  //   budget,
  //   poster_path,
  //   runtime,
  //   revenue,
  //   tagline,
  // } = movie;
  
  return (
    <section className='movie-info'> 
      <section className='home-btn-container'>
        <NavLink to="/">
          <button className='back-to-home-btn' alt='homeBtn'>🄧</button>
        </NavLink>
      </section>
      <img className='modal-mini-poster' id={movie.id} src={movie.poster_path} alt='poster'/>
      <section className='movie-details-container'>
        <h2 className='modal-title'>{movie.title}</h2>
        <p className='modal-release-date'><b>Release Date:</b> {dayjs(movie.release_date).format('MMM. D, YYYY')}</p>
        {/* <p className='genres'><b>Related Genres:</b> {(genres).join(', ')}</p> */}
        {/* <p className='runtime'><b>Runtime:</b> {runtime} minutes</p> */}
        {/* <p className='budget'><b>Budget:</b> ${(budget).toLocaleString('en-US')}</p> */}
        {/* <p className='revenue'><b>Box Office Revenue:</b> ${(revenue).toLocaleString('en-US')}</p> */}
        <section className='overview-container'>
          {/* <p className='modal-overview'><b>Overview:</b> {overview}</p> */}
        </section>
      </section>
      <section className='rating-tagline-container'>
        <p className='rating'>{Math.round(movie.average_rating)} STARS</p>
        {/* <p className='tagline'><i>"{tagline}"</i></p> */}
      </section>
      <img className='modal-back-drop' id={movie.id} src={movie.backdrop_path} alt='poster'/>
    </section>
  )
}

export default Modal