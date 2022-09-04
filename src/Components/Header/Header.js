import React, {useState} from "react"


const Header = (searchForMovies, addToSearch, event) => {
  const [userInput, setUserInput] = useState("")
   return (
          <form name="search" className="search-form">
            <input
              placeholder="Search for movies here! "
              className="search-bar"
              value='mulan'
              type="search"
            />  
              <button onClick={event => console.log(event)} className="search-button">Search</button>
              </form>
    )
}

export default Header


