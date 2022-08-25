import React from "react";
import App from "./App";
import Modal from "./Modal";
import './Card.css'

const Card = ({poster_path, film}) => {
    return (
    <div className="card">
        <img src={poster_path}/>
    </div> 
    )
}

export default Card