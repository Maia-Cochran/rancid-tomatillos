import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
import Header from '../Header/Header'
// import MovieContainer from '../MovieContainer/MovieContainer';
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
      .then(data => {this.setState({movies: [...this.state.movies, ...data[0].movies] })})
      console.log(`this.state.movies`, this.state.movies)
    }
    
    
    selectAMovie = (event) => {
      let selectedMovie =
      this.state.movies.filter(movie => {
        return movie.id === parseInt(event.target.id)
      })
      console.log('SELECT A MOVIE FUNCTION RESULT: ', selectedMovie)
      this.setState({showModal: selectedMovie})
    }
    


render = () => {
    return (
        <main>
          <Header />
            { this.state.showModal.length && <Modal props={this.state.showModal} /> }
          {/* <MovieContainer /> */}
        </main>
    )
  }
}

export default App;