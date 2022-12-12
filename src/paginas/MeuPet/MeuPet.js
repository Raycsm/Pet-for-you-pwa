import React from "react";
import BackButton from '../../componentes/BackButton/BackButton';
import BottomMenu from "../../componentes/BottomMenu/BottomMenu";
import MeuPetCard from "../../componentes/Cards/MeuPetCard/MeuPetCard";
import "./MeuPet.css";


export default function MeuPet() {

  return (
    <>
      <main>
        <div>
            <div>
                <BackButton/>
            </div>
            <h1 className="titulo-meu-pet">Meus pets</h1>
        </div>
        <div>

        </div>
          <MeuPetCard/>
        <div>
            <BottomMenu />
      </div>
      </main>
    </>
  );
}