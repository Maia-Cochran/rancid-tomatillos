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
    
    <div className='movie-info'> 
      <button className='back-to-home-btn' alt='homeBtn' onClick={backToHome}>🄧</button>
      <img className='modal-mini-poster' id={id} src={poster_path} alt='poster'/>
      <img className='modal-back-drop' id={id} src={backdrop_path} alt='poster'/>
      <img className='modal-logo' src={logo} alt='logo'/>
      <p className='modal-rating'>{average_rating}</p>
      <h2 className='modal-title'>{title}</h2>
      <p className='modal-overview'>{overview}</p>
      <p className='modal-release-date'>{release_date}</p>
      <p className='genres'>{genres}</p>
      <p className='budget'>{budget}</p>
      <p className='runtime'>{runtime}</p>
      <p className='revenue'>{revenue}</p>
      <p className='tagline'>{tagline}</p>
    </div>
    
  )
  
}

export default Modal