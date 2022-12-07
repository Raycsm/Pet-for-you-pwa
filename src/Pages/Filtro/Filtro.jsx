import React from "react";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import BackButton from "../../Components/BackButton/BackButton";
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