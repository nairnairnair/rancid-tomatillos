import React from "react";
import Movies from "./Movies";
import Card from "./Card"
import './Modal.css'

class Modal extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <section className="modalInfo">
            <img src=""/>
            <h1 className="title">Title:</h1>
            <p className="release-date">Release Date:</p>
            <small className="runtime">Runtime:</small>
            <h2 className="tagline">Tagline:</h2>
            <p className="genre">Genre:</p> 
            <p className="avg-rating">Average Rating:</p>
            <article className="overview">Overview</article>
            <small className="budget">Budget:</small>
            <small className="revenue">Revenue:</small>
        </section>
        )
    }
}

export default Modal