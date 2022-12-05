import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";

const data = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  { name: "Sobre nós", icon: <PeopleIcon /> },
  { name: "Fale Conosco", icon: <EmailIcon /> },
  { name: "Notificações", icon: <NotificationsIcon/> },
  { name: "Sair", icon: <ExitToAppIcon /> },
];

function DrawerMenu() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250, height:1000, backgroundColor:'#DB652F', color:'#fff'}} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem style={{ marginTop:15}} button key={index}>
          <ListItemIcon style={{ color:'#fff', marginLeft:15}}>{item.icon}</ListItemIcon>
          <ListItemText  primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <div>
      <IconButton><MenuIcon style={{ marginRight:10, color:'#666565'}} fontSize='large' onClick={() => setOpen(true)} /></IconButton>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  );
}

export default DrawerMenu;