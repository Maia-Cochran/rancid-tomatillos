import React, { Component } from 'react';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
// import Modal from '../Modal/Modal'

class App extends Component {
    constructor (){
    super();
    this.state ={
        movies: [],
        result: ``,
        showModal: false
      }
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
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



render(){
    return (
        <main className='app'>
            <Header />  
            <MovieContainer onClick={this.handleOpenModal} movies={this.state.movies} selectAMovie={this.selectAMovie} keys={this.state.keys}/>
            {/* {!<MovieContainer movies={this.state.movies} selectAMovie={this.selectAMovie} /> && <Modal isOpen={true}/>} */}
        {/* <button >Trigger Modal</button> */}
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        </main>
    )
  }
}
  const props = {};


ReactDOM.render(<App {...props} />, document.getElementById('root'))
export default App;