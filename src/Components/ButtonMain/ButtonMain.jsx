import React from "react";
import '../ButtonMain/ButtonMain.css'

const ButtonMain = ({children, onClick, className}) => {
    return(
        <button 
        id="button-main"
        onClick={onClick} 
        className={className}
        >{children}
        </button>
    )
}


export default ButtonMain;