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
        <section className='home-btn-container'>
          <NavLink to="/">
            <button className='back-to-home-btn' alt='homeBtn'>🄧</button>
          </NavLink>
        </section>
        <img className='modal-mini-poster' id={movie.id} src={movie.poster_path} alt='poster'/>
        <section className='movie-details-container'>
          <h2 className='modal-title'>{movie.title}</h2>
          <p className='modal-release-date'><b>Release Date:</b> {dayjs(movie.release_date).format('MMM. D, YYYY')}</p>
          <p className='genres'><b>Related Genres:</b> {(movie.genres).join(', ')}</p>
          <p className='runtime'><b>Runtime:</b> {movie.runtime} minutes</p>
          <p className='budget'><b>Budget:</b> ${(movie.budget).toLocaleString('en-US')}</p>
          <p className='revenue'><b>Box Office Revenue:</b> ${(movie.revenue).toLocaleString('en-US')}</p>
          <section className='overview-container'>
            <p className='modal-overview'><b>Overview:</b> {movie.overview}</p>
          </section>
        </section>
        <section className='rating-tagline-container'>
          <p className='modal-rating'>{Math.round(movie.average_rating)} STARS</p>
          <p className='tagline'><i>"{movie.tagline}"</i></p>
        </section>
        <img className='modal-back-drop' id={movie.id} src={movie.backdrop_path} alt='poster'/>
      </section>
      )
    }
  }
}

export default SingleMovie