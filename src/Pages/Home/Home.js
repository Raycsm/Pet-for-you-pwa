import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import { FilterList } from '@material-ui/icons';
import React from "react";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import Logo from "../../Components/Logo/Logo";
import "./Home.css";

const useStyles = makeStyles({
  root: {
    width: 500,
    
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
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction color="primary" value="filtro" icon={<FilterList />} to='/Filter' />
        </BottomNavigation>
      </div>
      <div>
        <BottomMenu />
      </div>
    </main>
  );
}