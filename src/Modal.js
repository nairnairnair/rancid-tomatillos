import React from "react";
import Movies from "./Movies";
import Card from "./Card"
import './Modal.css'

const Modal = ({props}) => {
    console.log(props[0]);
        return (
            <section className="modalInfo">
                <img src={`${props[0].backdrop_path}`}/>
                <h1 className="title">Title: {props[0].title}</h1>
                <p className="release-date">Release Date: {props[0].release_date}</p>
                {/* <small className="runtime">Runtime:</small> */}
                {/* <h2 className="tagline">Tagline:</h2> */}
                {/* <p className="genre">Genre:</p>  */}
                <p className="avg-rating">Average Rating: {props[0].average_rating.toFixed(2)}</p>
                {/* <article className="overview">Overview</article> */}
                {/* <small className="budget">Budget:</small> */}
                {/* <small className="revenue">Revenue:</small> */}
             </section>
        )
    }

export default Modal