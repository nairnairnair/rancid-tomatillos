import React from "react";
import App from "./App";
import './Card.css'

const Card = ({poster_path}) => {
    return (
    <div className="card">
        <img src={poster_path}/>
    </div> 
    )
}

export default Card