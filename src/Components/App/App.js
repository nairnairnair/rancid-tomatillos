import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Movies from '../Movies/Movies'
import Modal from '../Modal/Modal'
import {Redirect} from 'react-router-dom'
import Notfound from '../Notfound/Notfound'


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
        error: ''
      }
    }   
  }
  
  filterMovies = (event) => {
    const filteredMovies = this.state.movies.filter((movie) => movie.id === parseInt(event.target.id))
    this.getOneData(filteredMovies[0].id)
  }


  //need to make this dynamic and move to its own .js file!!!
  getAllData = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)  
    .then(rsp => {
      console.log(rsp)
      if (!rsp.ok) {
        throw Error(console.log('you fucked up!'), rsp.status)
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
          <Route component={Notfound} />
        </Switch>
      </main>
    )
   }
  }
export default App;

 //no matter what happens, a modal populates.
              //we need to write tests.
              //create single dynamic fetch req.
              //styling.
              //add YT link to modal via fetch.

