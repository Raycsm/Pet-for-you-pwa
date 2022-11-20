import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat';
import FaceIcon from '@material-ui/icons/Face';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width:500
    
  },
});

export default function BottomMenu() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
    }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} to='/Home' />
      <BottomNavigationAction label="Favoritos" value="favoritos" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Adoção" value="adoção" icon={<PetsIcon />} to='/Adocao' />
      <BottomNavigationAction label="Chat" value="chat" icon={<ChatIcon />} />
      <BottomNavigationAction label="Perfil" value="perfil" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}