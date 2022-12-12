import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../ativos/logo.png";
import BottomMenu from "../../componentes/BottomMenu/BottomMenu";
import PetsCard from "../../componentes/Cards/PetsCard/PetsCard";
import Carrousel from "../../componentes/Carrousel/Carrousel";
import DrawerMenu from "../../componentes/DrawerMenu/DrawerMenu";
import "./Home.css";

export default function Home() {

  const navigate = useNavigate();
  
  return (
    <main>
      <div className='container-menu'>
        <div className='drawer-menu'>
          <DrawerMenu />
        </div>
        <div>
          <img src={logo} className="logo-home" alt='logo' width={125} height={80} />
        </div>
        <div>
        <IconButton><FilterListIcon fontSize="large" onClick={() => navigate("/Filtro")}/></IconButton>
        </div>
      </div>
      <div>
        <Carrousel />
      </div>
      <div>
        <h3 className="titulo-home">Pets perto de você</h3>
      </div>
      <div>
            <PetsCard/>
      </div>
      <div>
        <BottomMenu />
      </div>
    </main>
  );
}
