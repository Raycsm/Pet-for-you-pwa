import React from "react";
import BackButton from "../../componentes/BackButton/BackButton";
import BottomMenu from "../../componentes/BottomMenu/BottomMenu";
import './Filtro.css';

export default function Filtro() {

  return (
    <div>
      <div>
        <BackButton/>
      </div>
      <div>
        <BottomMenu />
      </div>
      
    </div>
  )
}