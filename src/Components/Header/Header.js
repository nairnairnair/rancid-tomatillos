import React, {Component} from "react"
import { Route } from "react-router-dom"
import "./Header.css"

class Header extends Component {
    constructor() {
      super();
      this.state = {
        search:""
      }
    }
  
    handleChange = (event) => {
      this.setState({[event.target.name]:event.target.value})
      this.props.searchMovies(event.target.value);
    }
  
    clearSearch() {
      this.setState({search:""})
      this.props.searchMovies("")
    }
  
    render() {
      return (
        <div className="top-section">
          <img className="rancid-logo" src='../../../rancid-logo.png'/>
          <nav>
          <Route exact path="/" render={()=> {
              return (
                <form onSubmit={event => event.preventDefault()}>
                  <input
                  className="search-bar"
                  type="search"
                  value={this.state.search}
                  placeholder="Search for a Movie"
                  name="search"
                  onChange={event => this.handleChange(event)}
                  />
                </form>
              )
            }}
          />
          </nav>
        </div>
      )
    }
  }

export default Header


