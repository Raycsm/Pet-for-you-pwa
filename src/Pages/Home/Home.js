// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import { FilterList } from '@material-ui/icons';
import Links from "../../Components/Link/Link";

import React from "react";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import Logo from "../../Components/Logo/Logo";
import "./Home.css";

const useStyles = makeStyles({
  root: {
    width: 'auto',
    
  },
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <div>
        <Logo className="logo" alt='logo' width={120} height={80} />
          <Links color="primary" className="filtro" to='/Filtro'><FilterList /></Links>
      </div>
      <div>
        <BottomMenu />
      </div>
    </main>
  );
}