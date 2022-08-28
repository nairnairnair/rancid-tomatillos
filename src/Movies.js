import React from "react";
import App from "./App";
import Card from "./Card"
import './Movies.css'

const Movies = ({movieArray, filterMovies}) => {
    const movieCards = movieArray.map(movie => {
        return ( 
            <Card 
                film={movie}
                id={movie.id}
                key={movie.id}
                title={movie.title} 
                poster_path={movie.poster_path} 
                backdrop_path={movie.backdrop_path} 
                average_rating={movie.average_rating} 
                release_date={movie.release_date}
                filterMovies={filterMovies}
            />
        )
    })

    return (
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

export default Movies 