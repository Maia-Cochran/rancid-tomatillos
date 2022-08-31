import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
import SingleMovie from '../Modal/Modal';
import { Route, Switch } from 'react-router-dom'
// import Carousel from '../Carousel/Carousel';

class App extends Component {
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
      <main className = 'App'>
        <Header />
        <Switch>
          <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies}/> } />
          <Route exact path="/modal/:id" render={ ({match}) => <SingleMovie id={match.params.id} /> } />
        </Switch> 
      </main>
    )
  }
}

export default App;