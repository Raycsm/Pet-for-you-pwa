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
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const BottomMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction color="primary" label="Home" value="home" icon={<HomeIcon />} to='/Home' />
      <BottomNavigationAction label="Favoritos" value="favoritos" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Adoção" value="adoção" icon={<PetsIcon />} />
      <BottomNavigationAction label="Chat" value="chat" icon={<ChatIcon />} />
      <BottomNavigationAction label="Perfil" value="perfil" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}

export default BottomMenu;