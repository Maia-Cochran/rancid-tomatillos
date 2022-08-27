import React, { Component } from 'react';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
import Modal from '../Modal/Modal'

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
  console.log('SELECT A MOVIE FUNCTION RESULT: ', selectedMovie)
  return selectedMovie
}


render(event){
    return (
        <main className='app'>
            <Header />
            <MovieContainer movies={this.state.movies} selectAMovie={this.selectAMovie} />   
         
            {this.selectAMovie && <Modal />}



        </main>
    )
  };
}

export default App;