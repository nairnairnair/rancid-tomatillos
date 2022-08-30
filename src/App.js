import React, {Component} from 'react'
import {Route} from 'react-router-dom'
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
      showModal: false,
      movie: {
        id: '',
        title: '',
        posterPath: '',
        backdropPath: '',
        releaseDate: '',
        overview: '',
        genres: '',
        budget: '',
        revenue: '',
        runtime: '',
        tagline: '',
        averageRating: '',
        error: ''
      }
    }   
  }
  
  filterMovies = (event) => {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.id === parseInt(event.target.id)
    })
    this.setState({wasClicked: filteredMovies, showModal:true})
    this.getOneData(filteredMovies[0].id)
  }

  getAllData = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)  
    .then(rsp => {
      if (!rsp.ok) {
        throw Error(rsp.status)
      } else {
                return rsp.json()
            }           
        })
    .then((data) => this.setState({movies: data.movies}))
  }

  getOneData = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)  
    .then(rsp => {
      if (!rsp.ok) {
        throw Error(rsp.status)
      } else {
                return rsp.json()
            }           
        })
    .then((data) => this.setState({movie: {
        id: data.movie.id,
        title: data.movie.title,
        posterPath: data.movie.poster_path ,
        backdropPath: data.movie.backdrop_path,
        releaseDate: data.movie.release_date,
        overview:data.movie.overview,
        genres: data.movie.genres,
        budget: data.movie.budget,
        revenue: data.movie.revenue,
        runtime: data.movie.runtime,
        tagline: data.movie.tagline ,
        averageRating: data.movie.average_rating
    }}))
  }

  componentDidMount(){
    this.getAllData('')
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
            {this.state.wasClicked.length && <Modal props={this.state.movie} clearClickState={this.clearClickState} handleCloseModal={this.handleCloseModal}/>}
            <Movies movieArray={this.state.movies} filterMovies={this.filterMovies}/>
      </main>
    )
  }
}

export default App;
