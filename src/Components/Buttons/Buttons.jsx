import React from "react";
import '../Buttons/Buttons.css'

const Buttons = ({children, onClick, className}) => {
    return(
        <button 
        id="buttons"
        onClick={onClick} 
        className={className}
        >{children}
        </button>
    )
}


export default Buttons;