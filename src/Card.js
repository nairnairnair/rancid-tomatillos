import React from "react";
import './Card.css'

const Card = ({id, poster_path, filterMovies}) => {
    return (
        <div className="card">
            <img id={id} src={poster_path} onClick={event => filterMovies(event, id)}/> 
        </div> 
    )
}

export default Card
