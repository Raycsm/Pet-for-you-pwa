import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import './index.css';

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