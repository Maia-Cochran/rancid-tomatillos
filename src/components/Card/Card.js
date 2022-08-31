import React from 'react';
import './Card.css';

const Card = ({ logo, posterImage, rating, id, selectAMovie }) => {
  return (
    <div className='movie-card'>
      <img className='mini-poster' id={id} src={posterImage} alt='poster'/>
      <img className='logo' src={logo} alt='logo'/>
      <p className='rating'>{rating}</p>
    </div>
  )
}
    
export default Card;