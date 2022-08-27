import React, {Component} from 'react'
import './App.css'
import movieData from './movieData'
import Card from './Card'
import Movies from './Movies'
import Modal from './Modal'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: movieData,
      wasClicked: []
    }   
    // console.log(this.state);
  }

  filterMovies = (event) => {
    const filteredMovies = this.state.movies.movies.filter((movie) => {
      return movie.id === parseInt(event.target.id)
    })
    this.setState({wasClicked: filteredMovies})
  }

  componentDidMount(){
    //fetch goes here
    console.log('mounted successfully')
  }

  componentDidUpdate(){
    console.log('updated state');
  }

  clearClickState = () => {
    this.setState(this.state.wasClicked = [])
  }

  render = () => {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
            {this.state.wasClicked.length && <Modal props={this.state.wasClicked} clearClickState={this.clearClickState}/>}
        <Movies movieArray={this.state.movies} filterMovies={this.filterMovies}/>
      </main>
    )
  }
}

export default App;
