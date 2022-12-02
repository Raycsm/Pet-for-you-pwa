import React from "react";
<<<<<<< HEAD
import pets from "../../assets/pets.png"
=======
import pets from "../../assets/pets.png";
>>>>>>> d1b9b723add4816e13b9fc11c0c80497f4b70d09

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