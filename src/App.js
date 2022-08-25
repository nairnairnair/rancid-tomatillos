import React, {Component} from 'react'
import './App.css'
import movieData from './movieData'
import Card from './Card'
import Movies from './Movies'
import Modal from './Modal'

class App extends Component {
  constructor(){
    super()
    this.state = movieData    
    // console.log(this.state);
  }
  render(){
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Movies movieArray={this.state}/>
      </main>
    )
  }
}

export default App;
