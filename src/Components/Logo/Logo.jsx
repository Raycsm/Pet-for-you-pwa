import React from "react";
<<<<<<< HEAD
import logo from "../../assets/logo.png"
=======
import logo from "../../assets/logo.png";
>>>>>>> d1b9b723add4816e13b9fc11c0c80497f4b70d09

const Logo = ({alt, width, height, className}) => {
    return(
        <img 
        src= {logo} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
        /> 
    )
};

export default Logo;