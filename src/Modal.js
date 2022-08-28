import React from "react";
import Movies from "./Movies";
import Card from "./Card"
import './Modal.css'

const Modal = ({props, clearClickState}) => {
    console.log(props);
        return (
                <section className="modal" data-backdrop="static">
                    <img className="modal-image" src={`${props.backdropPath}`}/>
                    <h1 className="title">{props.title}</h1>
                    <p className="release-date">Release Date: {props.releaseDate}</p>
                    <small className="runtime">Runtime: {props.runtime} minutes</small>
                    <h2 className="tagline">{props.tagline}</h2> 
                    <p className="genre">{props.genres}</p> 
                    <p className="avg-rating">Average Rating: {props.averageRating}</p>
                    <article className="overview">{props.overview}</article>
                    {/* <small className="budget">Budget: {props.budget}</small>
                    <small className="revenue">Revenue: {props.revenue}</small> */}
                    <button className="close-button" onClick={() => {
                        clearClickState();
                    }}>X</button>
                </section>
        )
    }

export default Modal