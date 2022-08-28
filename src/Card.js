import React from "react";
import App from "./App";
import Modal from "./Modal";
import Movies from "./Movies";
import './Card.css'

//if state is falsy, render path one
//if truthy, render that section, hide all cards from view

const Card = ({id, poster_path, filterMovies}) => {
    return (
        <div className="card">
            <img id={id} src={poster_path} onClick={event => filterMovies(event, id)}/> 
        </div> 
    )
}

export default Card
