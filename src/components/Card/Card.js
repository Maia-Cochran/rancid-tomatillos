import React, { Component } from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom'



class Card extends Component{
  constructor (props) {
    super();
    this.state ={
        num: 0,
        movies: []
      }
    }

render  () {
  // console.log(`this.props.id`, this.props.id)
 
  return (
    // <NavLink className='nav' to={`/modal/${this.props.id}`} key={this.props.title}> 
    <div className='movie-card feature-wrapper' key={this.props.id}>
        <img className='mini-poster' src={this.props.posterImage} alt='poster' />
        <div className='title-logo-rating'>
        <p className='movie-title'>{this.props.title}</p>
        <p className='rating'>{this.props.rating}</p>
        <img className='logo' src={this.props.logo} alt='logo'/>
      </div>
    </div>
  //  </NavLink>
   )
  }
}


export default Card;