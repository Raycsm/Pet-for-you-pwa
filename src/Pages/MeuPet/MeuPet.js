/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import BackButton from '../../Components/BackButton/BackButton';
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import MeuPetCard from "../../Components/Cards/MeuPetCard/MeuPetCard";
import "./MeuPet.css"


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