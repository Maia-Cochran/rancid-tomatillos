import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
import Card from '../Card/Card'
import Header from '../Header/Header'
import MovieContainer from '../MovieContainer/MovieContainer';
import './App.css';
import { getAllData } from '../../api-calls';
import Modal from '../Modal/Modal'
// import Carousel from '../Carousel/Carousel';
import { Switch, Route, NavLink } from 'react-router-dom'


class App extends Component {
    constructor (){
    super();
    this.state ={
        movies: [],
        result: ``,
        showModal: [],
        id1: ''
      }
    };

    componentDidMount = () => {
      getAllData('/movies')
      .then(data => {this.setState({movies: [...data[0].movies] })} )
      // console.log(`this.state.movies`, this.state.movies)
    }
    
    
    // selectAMovie = (event) => {
    //   let selectedMovie = `/movies/${parseInt(event.target.id)}`
    //   getAllData(selectedMovie).then((data) => {
    //     this.setState({showModal: new Array(data[0].movie)})
    //     console.log(`data`, data)
    //   }) 
    //   }




      backToHome = () => {
      this.setState({showModal: []})
      }
         
      
      
      render = () => {
  // console.log(`Modal`, Modal)
  // console.log(`this.state.movies`, this.state.movies)
    return (
     
        <main className = 'App'>
          <Header />
         
            <Switch >
           
              <Route exact path="/" render={ () => <MovieContainer movies={this.state.movies} /> } />
            
              <Route exact path="/movies/:id" render={({ match }) => {
                  const movie1 = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
                  return <Modal movie={movie1} />
                }} />
              </Switch>

          
        </main>
    )
  }
}

export default App;