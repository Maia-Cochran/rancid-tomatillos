import React, { Component } from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

class Card extends Component{
  constructor (props) {
    super();
    this.state ={
        num: 0,
        movies: []
      };
    };

render  () {
  return (
    <NavLink className='nav' to={`/singlemovie/${this.props.id}`} key={this.props.id}> 
      <div className='movie-card feature-wrapper' key={this.props.id}>
          <img className='mini-poster' src={this.props.posterImage} alt='poster' />
          <div className='title-logo-rating'>
          <p className='movie-title'>{this.props.title}</p>
          <p className='rating'>{this.props.rating}</p>
          <img className='logo' src={this.props.logo} alt='logo'/>
        </div>
      </div>
    </NavLink>
    )
  };
};

export default Card;