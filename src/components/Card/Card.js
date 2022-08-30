import React from 'react';
import './Card.css';
// import { NavLink } from 'react-router-dom'
const Card = ({ logo, posterImage, rating, id, selectAMovie }) => {



  return (
    // <NavLink to='/Modal'>
      <div className='movie-card'>
      <img className='mini-poster' id={id} src={posterImage} alt='poster'/>
      <img className='logo' src={logo} alt='logo'/>
      <p className='rating'>{rating}</p>
      </div>
    //  </NavLink>
  )
}
    
export default Card;