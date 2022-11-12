import React from "react";
import '../Input/Input.css'

const Input = ({className, name, placeholder, type}) => {
    return(
        <input 
        className={className} 
        name={name} 
        placeholder={placeholder}
        type={type}
        required
        />

    )
}

export default Input;