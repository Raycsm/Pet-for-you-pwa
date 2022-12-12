import React from "react";
import pets from "../../assets/pets.png";
import './Pets.css';

const Pets = ({alt, width, height, className}) => {
    return(
        <img 
        id="pets"
        src= {pets} 
        alt={alt} 
        width={width} 
        height={height}
        className={className}
        />
    )
};

export default Pets;