/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "../../Components/Button/Button"
import {FaCat, FaDog, FaPaw} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import "./Adocao.css"

export default function Adocao() {

  const navigate = useNavigate();

  return (
    <>
      <main>
        <div>
            <p></p>
        </div>

        <div>
            <h1 className="titulo-meu-perfil">Adoção</h1>
        </div>

        <div>
            <button className="botao-adocao" onClick={() => navigate("/Cadastrarpet")}>
            <FaDog color='#fff' size={45} className='icon-dog'/>
            <div></div>
            Cadastrar pet
            </button>
            
            <button className="botao-adocao" >
            <FaPaw color='#fff' size={45} className='icon-dog'/>
             <div></div> 
              Meus pets
            </button>
        </div>

        <div>
            <Button className="botao-adocao">
            <FaCat color='#fff' size={40} className='icon-dog'/>
             <div></div>
            Candidaturas de adoção
            </Button>
        </div>
            
        
      </main>
    </>
  );
}