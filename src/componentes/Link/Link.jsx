import React from "react";
import { Link } from "react-router-dom";
import '../Link/Link.css'

const Links = ({children, className, to}) => {
    return(
        <Link className={className} to={to} >{children}</Link>  
    )
}


export default Links;