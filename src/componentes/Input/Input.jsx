import React from "react";
import '../Input/Input.css'

const Input = ({className, name, placeholder, type, required}) => {
    return(
        <input 
        id="input"
        className={className} 
        name={name} 
        placeholder={placeholder}
        type={type}
        required={required}
        />

    )
}


export default Input;