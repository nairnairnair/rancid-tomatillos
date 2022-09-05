import React from "react";
import './Modal.css'
import { Link } from 'react-router-dom';


const Modal = ({props}) => {
    const fixedRating = `${Number(props.averageRating).toFixed(1)}%`;
    return (
            <section className="modal">
                <img className="modal-image" src={`${props.backdropPath}`} alt={`${props.title} poster`}/>
                <div className="top-modal">
                    <h1 className="title">{props.title}</h1>
                    <h2 className="tagline">{props.tagline}</h2>
                </div>
                <section className="mid-modal">
                    <div className="left-modal">
                        <p className="release-date">Release Date: {props.releaseDate}</p>
                        <p className="runtime">Runtime: {props.runtime} minutes</p>
                    </div>
                    <div className="right-modal">
                        <p className="genre">{props.genres}</p>
                        <p className="avg-rating">Average Rating:{fixedRating}</p>
                    </div>
                </section>  
                <article className="overview">{props.overview}</article>
                <div className="bottom-modal">
                    <small className="budget">Budget: {props.budget}</small>
                    <small className="revenue">Revenue: {props.revenue}</small>
                </div>
                <Link to={`/`} className='back-btn'><button className="close-button" onClick={() => {
                }}>X</button></Link>
            </section>
    )
}

export default Modal    