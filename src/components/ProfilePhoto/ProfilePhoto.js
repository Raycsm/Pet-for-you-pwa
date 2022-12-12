import React from "react";
//import { useAuth, upload } from "../../firebase";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import user from '../../assets/user.png';
import './ProfilePhoto.css';


export default function ProfilePhoto(){

    //const currentUser = useAuth();
    //const [photo, setPhoto] = useState(null);
    //const [loading, setLoading] = useState(false);
   // const [photoURL, setPhotoURL] = useState({user});

    //function handleChange(e){
        //if (e.target.files[0]) {
            //setPhoto(e.target.files[0])
          //}
    //}

    //function handleClick(){
       // upload(photo, currentUser, setLoading);
    //}

    //useEffect(() => {
        //if (currentUser?.photoURL) {
         // setPhotoURL(currentUser.photoURL);
       // }
    //  }, [currentUser])

    return(
        <div>
            <div>
                <img src={user} alt="avatar" className="avatar" />
                <div style={{textAlign:'center'}}>
                    <IconButton alignItems="center" style={{color:'#DB652F'}} aria-label="upload picture" component="label">
                        <input style={{display:'none'}} hidden accept="image/*" type="file" />
                        <PhotoCamera />
                        <p style={{marginLeft:5, marginTop:30, color:'#DB652F'}}>Adicionar foto</p>
                    </IconButton> 
                </div>
            </div>
        </div>
    )
}