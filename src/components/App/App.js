import React, { Component } from 'react';
import Header from '../Header/Header'
import Card from '../Card/Card';
import './App.css';



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
            <Card />     
        </main>
    )
  };
}


export default App;