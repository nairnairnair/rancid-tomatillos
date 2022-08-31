import React from "react";
import Card from "./Card"
import './Movies.css'
import { Link } from 'react-router-dom';

const Movies = ({movieArray, filterMovies}) => {
    const movieCards = movieArray.map(movie => {  
        return ( 
            <div>
                <Card 
                    film={movie}
                    id={movie.id}
                    key={movie.id}
                    poster_path={movie.poster_path} 
                    filterMovies={filterMovies}
                />
            </div>
        )
    })

    return (
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

export default Movies 