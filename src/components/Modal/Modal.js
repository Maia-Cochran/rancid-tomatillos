// import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import React from 'react'
// import { getAllData } from '../../api-calls';
// import Card from '../Card/Card'
import './Modal.css'
// import MovieContainer from '../MovieContainer/MovieContainer';
// import logo from '../../images/rancid-tomatillos.png'

const DisplayMovieDetails = (
    <div className="ui dimmer modals visible active">  
    <div className="ui standard modal visible active">
      THIS IS SOME TEXT IN THE MODAL // add some UI features here
    </div>
  </div>
);

function MovieDetails(props) {
    return ReactDOM.createPortal(DisplayMovieDetails, document.querySelector('#modal'))
}

export default MovieDetails;