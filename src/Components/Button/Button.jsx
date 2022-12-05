import React from "react";
import '../Button/Button.css'

const Button = ({children, onClick, className}) => {
    return(
        <button 
        id="buttons"
        onClick={onClick} 
        className={className}
        >{children}
        </button>
    )
}


export default Button;