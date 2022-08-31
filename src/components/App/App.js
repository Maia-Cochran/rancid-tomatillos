import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
import Modal from '../Modal/Modal';
import { Route, Switch } from 'react-router-dom'
// import Carousel from '../Carousel/Carousel';

class App extends Component {
  constructor (){
  super();
  this.state ={
      movies: [],
      result: ``,
      showModal: []
    }
  };

  componentDidMount = () => {
    getAllData('/movies').then(data => {
    this.setState({ movies: [...data[0].movies] }) })
  }
      
  render = () => {
    return (
      <main className = 'App'>
        <Header />
        <Switch>
          <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies}/> } />
          <Route exact path="/modal/:id" render={({match}) => {
            const selectedMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
            return <Modal movie={selectedMovie} />
          }}/>  
        </Switch> 
      </main>
    )
  }
}

export default App;