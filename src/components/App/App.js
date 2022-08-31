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
let selectedMovie;

class App extends Component {
  constructor (){
  super();
  this.state ={
      movies: [],
      result: ``,
      showModal: [],
      id2: '',
    }
  };

  componentDidMount = () => {
    getAllData('/movies').then(data => {
    this.setState({ movies: [...data[0].movies] })
    })
  }

  // componentDidUpdate() {
  //   if (selectedMovie !== null)
  //   getAllData(`/movies/${id}`)
  // }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.id !== prevProps.id) {
  //     this.fetchData(this.props.id);
  //   }
  // }


  

      
  render = () => {
    return (
      <main className = 'App'>
        <Header />
        <Switch>
          <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies}/> } />
          <Route path="/modal/:id" render={({match}) => {
            selectedMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
            console.log(selectedMovie)
            console.log(this.state.showModal)
            return <Modal movie={selectedMovie} />
          }}/>  
        </Switch> 
      </main>
    )
  }
}

export default App;