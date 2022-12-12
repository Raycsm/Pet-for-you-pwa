import React from "react";
import logo from "../../ativos/logo.png";
import "./Logo.css";

const Logo = ({alt, width, height, className}) => {
    return(
        <img 
        id="logo"
        src= {logo} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
        /> 
    )
};

export default Logo;