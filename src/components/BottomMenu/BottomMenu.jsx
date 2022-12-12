import React, {useState} from 'react';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@material-ui/icons/Pets';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/Chat';

export default function BottomMenu() {

  const [value, setValue] = useState('/Home');

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, color:'#666565', '& .Mui-selected': {
      '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
        color: '#DB652F'
      }
    }}} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to={'/Home'} value={'Home'}  label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to={'/Favoritos'} value={'Favoritos'} label="Favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} to={'/Adocao'} value={'Adocao'} label="Adoção" icon={<PetsIcon />} />
        <BottomNavigationAction component={Link} to={'/Chat'} value={'Chat'}label="Chat" icon={<ChatIcon />} />
        <BottomNavigationAction component={Link} to={'/Meuperfil'} value={'Meuperfil'} label="Meu perfil" icon={<FaceIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
