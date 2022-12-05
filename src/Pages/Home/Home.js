import React from "react";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import Logo from "../../Components/Logo/Logo";
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useNavigate } from 'react-router-dom';
import DrawerMenu from "../../Components/DrawerMenu/DrawerMenu";
import Carrousel from "../../Components/Carrousel/Carrousel"
import "./Home.css";

export default function Home() {

  const navigate = useNavigate();
  
  return (
    <main>
      <div className='container-menu'>
        <div>
          <DrawerMenu />
        </div>
        <div>
          <Logo className="logo-home" alt='logo' width={125} height={80} />
        </div>
        <div>
        <IconButton><FilterListIcon fontSize="large" onClick={() => navigate("/Filtro")}/></IconButton>
        </div>
      </div>
      <div>
        <Carrousel />
      </div>
      <div>
        <BottomMenu />
      </div>
    </main>
  );
}
