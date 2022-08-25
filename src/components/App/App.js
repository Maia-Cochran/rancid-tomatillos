import React, { Component } from 'react';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import movieData from '../../data'

console.log(movieData.movies)

class App extends Component {
    constructor (){
    super();
    this.state ={
        movies: movieData.movies,
        result: ``
      }
    }

addMovies = (movies) => {
  this.setState({ movies: [...this.state.movies, movies] })
}

render(){
    return (
        <main className = 'App'>
            <Header />
            <MovieContainer movies={this.state.movies}/>     
        </main>
    )
  };
}


export default App;