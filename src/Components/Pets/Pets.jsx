import React from "react";
import pets from "../../assets/pets.png";

const Pets = ({alt, width, height, className}) => {
    return(
        <img 
        src= {pets} 
        alt={alt} 
        width={width} 
        height={height}
        className={className}
        />
    )
};

export default Pets;