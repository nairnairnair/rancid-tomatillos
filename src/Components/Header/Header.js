import React, {useState} from "react"

const Header = (allMovies) => {

const [userInput, setUserInput] = useState("")

  const searchForMovies = () => {
    const searchResults = allMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(userInput.toLowerCase())
    })
    console.log('results', searchResults)
    return searchResults
  } 
  
    return(
      <header>
          <h1>Rancid Tomatillos</h1>
          <form name="search" className="search-form">
            <input 
              className="search-bar"
              value={this.state.search}
              type="search">
              onChange={event => setUserInput(event.target.value)}
            </input>
            <button onClick={searchForMovies} className="search-button">Search</button>
          </form> 
      </header>
    )
}

export default Header


