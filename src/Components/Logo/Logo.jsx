import React from "react";
import logo from "../../assets/logo.png"

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