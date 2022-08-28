import React, {Component} from 'react'
import './App.css'
import Card from './Card'
import Movies from './Movies'
import Modal from './Modal'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      wasClicked: [],
      showModal: false
    }   
  }
  
  filterMovies = (event) => {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.id === parseInt(event.target.id)
    })
    this.setState({wasClicked: filteredMovies, showModal:true})
  }

  componentDidMount(){
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)  
    .then(rsp => {
            if (!rsp.ok) {
                throw Error(rsp.status)
            } else {
                return rsp.json()
            }
        })
    .then((data) => this.setState({movies: data.movies}))
  }

  componentDidUpdate(){
    console.log('updated state');
    console.log(this.state);
  }

  handleOpenModal = () => {
    this.setState({showModal : true})
  }

  handleCloseModal = () => {
    this.setState({showModal : false})
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
