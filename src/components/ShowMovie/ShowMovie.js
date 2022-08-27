import React from 'react'
import Card from '../Card/Card'
import './ShowMovie.css'
import logo from '../../images/rancid-tomatillos.png'

const ShowMovie = ({ logo, posterImage, rating, id, selectAMovie, backdropPath, releaseDate }) => {


    return (
        <div className ="selected-Movie-Container" >
            <img className='mini-poster2' id={id} src={posterImage} alt='poster2'/>
            <img className='logo2' src={logo} alt='logo2'/>
            <img className='backDropPath' src={backdropPath} alt='backDrop'/>
            <p className='release-date'>{releaseDate}</p>
            <p className='rating2'> {rating}</p>
            
        </div>
       
      )
    }

    export default ShowMovie