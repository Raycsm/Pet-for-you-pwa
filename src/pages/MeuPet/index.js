import React from "react";
import BackButton from '../../components/BackButton/BackButton';
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import MeuPetCard from "../../components/Cards/MeuPetCard/MeuPetCard";
import "./index.css";


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