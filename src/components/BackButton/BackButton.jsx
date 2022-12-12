import React from "react";
import '../BackButton/BackButton.css'
import { useNavigate} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = ({props}) => {

    const navigate = useNavigate();

    return(
            <div className="container-back">
                <IconButton>
                    <ArrowBackIcon 
                    className="back-button"  
                    onClick={() => navigate(-1)}/>
                </IconButton>
            </div>
    )
}


export default BackButton;