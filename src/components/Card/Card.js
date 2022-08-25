import React, { Component } from 'react';
import './Card.css';

const Card = ({ logo, posterImage, rating, id }) => {
  return (
    <div className='movie-card'>
      <img className='mini-poster' src={posterImage} alt='poster image'/>
      <img className='logo' src={logo} alt='logo'/>
      <p className='rating'>{rating}</p>
    </div>
  )
}
    
export default Card;