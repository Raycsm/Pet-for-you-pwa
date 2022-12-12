import React from "react";
import { FaCat, FaDog, FaPaw } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BackButton from "../../componentes/BackButton/BackButton";
import BottomMenu from "../../componentes/BottomMenu/BottomMenu";
import "../Adocao/Adocao.css";

export default function Adocao() {

  const navigate = useNavigate();

  return (
    <>
      <main>
        <div>
            <BackButton className="back-adocao"/>
        </div>

        <div>
            <h1 className="titulo-meu-perfil">Adoção</h1>
        </div>

        <div className="botoes-adocao">
            <div>
                <button className="botao-adocao" onClick={() => navigate("/Cadastrarpet")}>
                <FaDog color='#fff' size={45} className='icon-dog'/>
                <div></div>
                Cadastrar pet
                </button>
            </div>
            <div>
                <button className="botao-adocao" onClick={() => navigate("/MeusPets")} >
                <FaPaw color='#fff' size={45} className='icon-dog'/>
                <div></div> 
                  Meus pets
                </button>
            </div>
            <div>
                <button className="botao-adocao">
                <FaCat color='#fff' size={40} className='icon-dog'/>
                <div></div>
                Candidaturas de adoção
                </button>
            </div>
        </div>
        <div>
          <BottomMenu />
      </div>
      
      </main>
    </>
  );
}