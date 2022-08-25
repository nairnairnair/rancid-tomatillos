import React, {Component} from 'react'
import './App.css'
import movieData from './movieData'

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
    console.log(movieData);
  }
  render(){
    return (
      <h1>Rancid Tomatillos</h1>
    )
  }
}

export default App;
