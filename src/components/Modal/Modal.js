import React from 'react';
import './Modal.css';

const Modal = ({ props }) => {
  return (
    <div className='movie-info'> 
    <img className='modal-poster' src={`${props[0].backdrop_path}`} />
    {/* <img className='modal-logo' src={logo} alt='logo'/> */}
    <img className='modal-mini-poster' src={`${props[0].poster_path}`}/>
    <p className='modal-release-date'>Release Date: {props[0].release_date} </p> 
    <p className='modal-rating'>{props[0].rating} </p>
    <p className='modal-title'>Title: {props[0].title}</p>
    {/* <p className='modal-revenue'>Revenue: {props[0].revenue}</p> */}
    {/* <p className='modal-runtime'>Runtime: {props[0].runtime}</p> */}
    </div>
  )
}

export default Modal