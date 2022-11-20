import React from "react";
import './InputDisabled.css'

const InputDisabled = ({className, name, placeholder, type, disabled}) => {
    return(
        <input id="disabled"
        className={className} 
        name={name} 
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        required
        />

    )
}

export default InputDisabled;