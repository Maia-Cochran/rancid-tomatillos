import React, { Component } from 'react';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
// import { data } from './data'


class App extends Component {
    constructor (){
    super();
    this.state ={
        movie: [],
        result: ``
      }
   
    }

render(){
    return (
        <main className = 'App'>
            <Header />
            <MovieContainer />     
        </main>
    )
  };
}


export default App;