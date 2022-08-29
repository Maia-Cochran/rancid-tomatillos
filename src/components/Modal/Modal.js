import React from 'react';
import './Modal.css';
import logo from '../../images/rancid-tomatillos.png'

const Modal = ({ props, backToHome }) => {
  const [movie] = props;
  console.log(`props`, props)
  console.log(`[movie]`, movie)
  const {
    id,
    title,
    backdrop_path,
    average_rating,
    release_date,
    overview,
    genres,
    budget,
    poster_path,
    runtime,
    revenue,
    tagline,
  } = movie;
  

    
  return (
    
    <section className='movie-info'> 
        <section className='home-btn-container'>
            <button className='back-to-home-btn' alt='homeBtn' onClick={backToHome}>🄧</button>
        </section>
      <div className='movie-details-container'>
        <img className='modal-mini-poster' id={id} src={poster_path} alt='poster'/>
        <h2 className='modal-title'>{title}</h2>
        <p className='modal-release-date'>{release_date}</p>
        <p className='genres'>{genres}</p>
        <p className='runtime'>{runtime}</p>
        <p className='budget'>{budget}</p>
        <p className='revenue'>{revenue}</p>
        <p className='modal-overview'>{overview}</p>
      </div>
      <div className='rating-tagline-container'>
        <img className='modal-back-drop' id={id} src={backdrop_path} alt='poster'/>
        <p className='modal-rating'>{average_rating}</p>
        <p className='tagline'>{tagline}</p>
      </div>
    </section>
    
  )
}

export default Modal