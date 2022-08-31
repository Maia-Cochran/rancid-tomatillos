import React from 'react';
import './Card.css';

const Card = ({ logo, title, posterImage, rating, id }) => {
  return (
    <div className='movie-card'>
      <img className='mini-poster' id={id} src={posterImage} alt='poster'/>
      <div className='title-logo-rating'>
        <p className='movie-title'>{title}</p>
        <p className='rating'>{rating}</p>
        <img className='logo' src={logo} alt='logo'/>
      </div>
    </div>
  )
}
    
export default Card;