import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
import SingleMovie from '../Modal/Modal';
import { Route } from 'react-router-dom';
// import Carousel from '../Carousel/Carousel';
import NotFound from '../NotFound/NotFound';
import InternalServerError from '../InternalServerError/InternalServerError';



class App extends Component{
  constructor () {
    super();
    this.state ={
        movies: [],
      }
  };

  componentDidMount = () => {
    getAllData('/movies').then(data => {
    this.setState({ movies: [...data[0].movies] })
    })
  }


      
  render = () => {
    return (
      <main className = 'app'>
        <Header />
        <Route exact path='/' render={ () => <MovieContainer movies={this.state.movies}/> } />
        <Route exact path='/modal/:id' render={ ({match}) => <SingleMovie id={match.params.id} /> } />
        <Route component={NotFound} />
        <Route component={InternalServerError} />
      </main>
    )
  }
}

export default App;