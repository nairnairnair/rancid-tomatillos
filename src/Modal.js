import React from "react";
import Movies from "./Movies";
import Card from "./Card"
import './Modal.css'

const Modal = ({props, clearClickState}) => {
    console.log('cc', clearClickState);
        return (
                <section className="modal">
                    <img className="modal-image" src={`${props[0].backdrop_path}`}/>
                    <h1 className="title">{props[0].title}</h1>
                    <p className="release-date">Release Date: {props[0].release_date}</p>
                    {/* <small className="runtime">Runtime:</small> */}
                    {/* <h2 className="tagline">Tagline:</h2> */}
                    {/* <p className="genre">Genre:</p>  */}
                    <p className="avg-rating">Average Rating: {props[0].average_rating.toFixed(2)}</p>
                    {/* <article className="overview">Overview</article> */}
                    {/* <small className="budget">Budget:</small> */}
                    {/* <small className="revenue">Revenue:</small> */}
                    <button className="close-button" onClick={console.log('button works')}>X</button>
                </section>
        )
    }

export default Modal