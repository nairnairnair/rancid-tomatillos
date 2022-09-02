import React from "react";
import Card from '../Card/Card'
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
                    title={movie.title}
                    poster_path={movie.poster_path} 
                    filterMovies={filterMovies}
                />
            </div>
        )
    })

    return (
        <div className="movies-container">
            {movieCards.length ? movieCards : <h1 className='error-message'>Our server appears to be down, please try again later</h1>}
        </div>
    )
}

export default Movies 