import React, { Component } from 'react';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import movieData from '../../data'
import { getAllData } from '../../api-calls';


class App extends Component {
    constructor (){
    super();
    this.state ={
        movies: [],
        result: ``
      }
    }

componentDidMount = () => {
  getAllData()
  .then(data => {this.setState({movies: [...this.state.movies, ...data[0].movies] })})
  console.log(`this.state.movies`, this.state.movies)
}


selectAMovie = (event) => {
  let selectedMovie;
  this.state.movies.forEach(movie => {
    if (movie.id === parseInt(event.target.id)) {
      selectedMovie = movie
    }
  })
  console.log(selectedMovie.title)
  return selectedMovie
}

render(){
    return (
        <main className='app'>
            <Header />
            <MovieContainer movies={this.state.movies} selectAMovie={this.selectAMovie}/>   
            {/* {event.target.className.contains('movie-card') && <Modal id=event.target.id/>}   */}
        </main>
    )
  };
}


export default App;