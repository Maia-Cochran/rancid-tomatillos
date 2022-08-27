import React from 'react';
import './ModalInner.css';

const ModalInner = ({ logo, posterImage, rating, id, selectAMovie, backdropPath, releaseDate }) => {
  return (
    <div className='modal-movie-card' onClick={(event) => selectAMovie(event)}>
      <img className='modal-mini-poster' id={id} src={posterImage} alt='poster'/>
      <img className='modal-logo' src={logo} alt='logo'/>
      <img className='modal-big-poster' src={backdropPath} alt='backdrop' />
      <p className='modal-release-date'>{releaseDate}</p> 
      <p className='modal-rating'>{rating}</p>
    </div>
  )
}