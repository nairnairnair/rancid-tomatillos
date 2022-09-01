import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({id, poster_path, filterMovies, title}) => {
    return (
            <div className="card">
                <Link to={`/movies/${id}`} className='id-link'>
                <img id={id} src={poster_path} alt={`${title} poster`} key={id} onClick={event => filterMovies(event, id)}/>
                </Link>
            </div>
    )
}

export default Card
