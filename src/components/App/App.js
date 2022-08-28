import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
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
        result: ``,
        showModal: []
      }
    };

    componentDidMount = () => {
      getAllData()
      .then(data => {this.setState({movies: [...data[0].movies] })} )
      console.log(`this.state.movies`, this.state.movies)
    }
    
    
    selectAMovie = (event) => {
      let selectedMovie;
      this.state.movies.forEach(movie => {
        if( movie.id === parseInt(event.target.id)) {
          console.log(`movie`, movie)
          selectedMovie = movie
        }
      })
      console.log('SELECT A MOVIE FUNCTION RESULT: ', selectedMovie)
      //  return selectedMovie

       this.setState({showModal: new Array(selectedMovie)})
      }

      backToHome = () => {
      this.setState({showModal: []})
      }
         
      
      
      render = () => {
  console.log(`Modal`, Modal)
    return (
        <main className = 'App'>
          <Header />
             { this.state.showModal.length ?(<Modal  props={this.state.showModal} backToHome={this.backToHome}/>) : (<MovieContainer movies={this.state.movies} selectAMovie={this.selectAMovie}/> )}   
        </main>
    )
  }
}

export default App;