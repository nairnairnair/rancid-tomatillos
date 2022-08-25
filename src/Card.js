import React from "react";
import App from "./App";

const Card = ({poster_path}) => {
    return (
    <div>
        <img src={poster_path}/>
    </div> 
    )
}

export default Card