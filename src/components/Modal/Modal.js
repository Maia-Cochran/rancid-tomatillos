import React, { Component } from 'react';
import './Modal.css';
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'
import { getAllData } from '../../api-calls';

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    }
  }
  
  componentDidMount = () => {
    getAllData(`/movies/${this.props.id}`).then(data => {
      this.setState({ movie: [data[0].movie]})
    })
  }

  render = () => {
    let movie = this.state.movie[0]
    if (movie === undefined) {
      return 'Loading...'
    } else {
      return (
      <section className='movie-info'> 
        <NavLink to="/">
          <button className='back-to-home-btn' alt='homeBtn'>X</button>
        </NavLink>
        <section className='movie-details-container'>
          <img className='modal-mini-poster' id={movie.id} src={movie.poster_path} alt='poster'/>
          <h2 className='modal-title'>{movie.title}</h2>
          <p className='modal-release-date'><b>Release Date:</b> {dayjs(movie.release_date).format('MMM. D, YYYY')}</p>
          <p className='genres'><b>Related Genres:</b> {(movie.genres).join(', ')}</p>
          <p className='runtime'><b>Runtime:</b> {movie.runtime} minutes</p>
          {movie.budget > 0 && <p className='budget'><b>Budget:</b> ${(movie.budget).toLocaleString('en-US')}</p>}
          {movie.revenue > 0 && <p className='revenue'><b>Box Office Revenue:</b> ${(movie.revenue).toLocaleString('en-US')}</p>}
          <p className='modal-overview'><b>Overview:</b> {movie.overview}</p>
        </section>
        <p className='modal-rating'><i><b>Rating: </b>{(movie.average_rating).toFixed(1)}</i></p>
        {movie.tagline.length > 0 && <p className='tagline'><i>"{movie.tagline}"</i></p>}
        <img className='modal-back-drop' id={movie.id} src={movie.backdrop_path} alt='poster'/>
      </section>
      )
    }
  }
}

export default SingleMovie