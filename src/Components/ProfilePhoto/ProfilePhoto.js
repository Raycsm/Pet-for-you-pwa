import React from "react"
//import { useAuth, upload } from "../../firebase";
import user from '../../assets/user.png'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import './ProfilePhoto.css'


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
                <Stack>
                    <IconButton alignItems="center" style={{color:'#DB652F'}} aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <div>
                            
                        </div>
                        <PhotoCamera />
                        <p style={{marginLeft:5, marginTop:30, color:'#DB652F'}}>Adicionar foto</p>
                    </IconButton>
                    
                </Stack>
            </div>
        </div>
    )
}