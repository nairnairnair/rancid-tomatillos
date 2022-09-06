import React from "react";
import Card from '../Card/Card'
import './Movies.css'


const Movies = ({movies, filterMovies}) => {
    const movieCards = movies.map(movie => { 
        return (           
            <div key={movie.id}>
                <Card
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