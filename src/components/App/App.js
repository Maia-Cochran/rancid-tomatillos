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
    }
    //   this.handleOpenModal = this.handleOpenModal.bind(this);
    //   this.handleCloseModal = this.handleCloseModal.bind(this);
    // }
    
    // handleOpenModal () {
    //   this.setState({ showModal: true });
    // }
    
    // handleCloseModal () {
    //   this.setState({ showModal: false });
    
    componentDidMount = () => {
      getAllData()
      // console.log(12345, getAllData())
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
      
      
      
      render = () => {
  console.log(`Modal`, Modal)
    return (
        <main className = 'App'>
          <Header />
             { this.state.showModal.length ?(<Modal  props={this.state.showModal}/>) : (<MovieContainer movies={this.state.movies} selectAMovie={this.selectAMovie}/> )}   
        </main>
    )
  }
}

export default App;