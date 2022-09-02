import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Movies from '../Movies/Movies'
import Modal from '../Modal/Modal'
import apiCalls from '../../apiCalls'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
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
      },
      error: false
    } 
    console.log(this.state)  
  }
  
  filterMovies = (event) => {
    const filteredMovies = this.state.movies.filter((movie) => movie.id === parseInt(event.target.id))
    apiCalls.getData(filteredMovies[0].id)
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
    apiCalls.getData('')
    .then(data => this.setState({movies: data.movies}))
    .catch(this.setState({error: true}))
  }

  render() {
    return (
      <main className="App"> 
        <h1>Rancid Tomatillos</h1>
        <Switch>
          <Route
              exact path="/movies/:id"    
              render={() => { 
                return <Modal props={this.state.movie}/>
              }
            }/>
          <Route exact path='/' render={() =><Movies movieArray={this.state.movies} filterMovies={this.filterMovies}/>}/>
        </Switch>
      </main>
    )
   }
  }
export default App;
    //styling.
    //add YT link to modal via fetch.

