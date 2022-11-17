import React, {useState, useEffect} from "react"
//import { useAuth, upload } from "../../firebase";
import user from "../../Assets/user.png"
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
            </div>
            <div>
                <input type="file"  />
            </div>
            <div>
                <button className="botao-photo">Trocar foto</button>
            </div>
        </div>
    )
}