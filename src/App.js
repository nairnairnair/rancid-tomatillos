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
      wasClicked: [],
      showModal: false
    }   
    // decide whether to render movies or render the modal over top of the movies.
  }
  
  filterMovies = (event) => {
    const filteredMovies = this.state.movies.movies.filter((movie) => {
      return movie.id === parseInt(event.target.id)
    })
    this.setState({wasClicked: filteredMovies, showModal:true})
  }

  //if showModal is true, disable outside click

  componentDidMount(){
    //fetch goes here
    console.log('mounted successfully')
  }

  handleOpenModal = () => {
    this.setState({showModal : true})
  }

  handleCloseModal = () => {
    this.setState({showModal : false})
  }

  componentDidUpdate(){
    console.log('updated state');
    console.log(this.state);
  }

  clearClickState = () => {
    this.setState(this.state.wasClicked = [])
  }

  render = () => {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
            {this.state.wasClicked.length && <Modal props={this.state.wasClicked} clearClickState={this.clearClickState} handleCloseModal={this.handleCloseModal}/>}
        <Movies movieArray={this.state.movies} filterMovies={this.filterMovies} />
      </main>
    )
  }
}

export default App;
