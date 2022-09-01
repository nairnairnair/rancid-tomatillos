import React from "react";
import './Modal.css'
import { Link } from 'react-router-dom';


const Modal = ({props}) => {
    return (
            <section className="modal" data-backdrop="static">
                <img className="modal-image" src={`${props.backdropPath}`} alt={`${props.title} poster`}/>
                <h1 className="title">{props.title}</h1>
                <p className="release-date">Release Date: {props.releaseDate}</p>
                <small className="runtime">Runtime: {props.runtime} minutes</small>
                <h2 className="tagline">{props.tagline}</h2> 
                <p className="genre">{props.genres}</p> 
                <p className="avg-rating">Average Rating: {props.averageRating}</p>
                <article className="overview">{props.overview}</article>
                <small className="budget">Budget: {props.budget}</small>
                <small className="revenue">Revenue: {props.revenue}</small>
                <Link to={`/`} className='back-btn'><button className="close-button" onClick={() => {
                }}>X</button></Link>
            </section>
    )
}

export default Modal    