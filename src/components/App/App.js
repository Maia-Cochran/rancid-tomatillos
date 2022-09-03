import React, { Component } from 'react';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
import SingleMovie from "../Modal/Modal"
import NotFound from '../NotFound/NotFound';
import InternalServerError from '../InternalServerError/InternalServerError';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/' render={ () => <MovieContainer movies={this.state.movies}/> } />
          <Route exact path='/modal/:id' render={ ({match}) => <SingleMovie id={match.params.id} /> } />
          <Route component={InternalServerError} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default App;