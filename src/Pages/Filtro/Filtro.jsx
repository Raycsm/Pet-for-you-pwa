import React from "react";
import Button from "../../Components/Button/Button";
import '../Filtro/Filtro.css';

const Filtro = () => {
  return (
    <div className="main">
      <h1 className="titulo">Filtros</h1>

      <form>
        <div>
          <p className="text_s">Raio em KM</p>
        </div>

        <p className="text_s">Eu quero adotar</p>
        <div className="adotar">
          <div className="top">
            <Button className="botao_filtro" type="race">Cachorro</Button>
            <Button className="botao_filtro" type="race">Pássaro</Button>
          </div>
          <div className="down">
            <Button className="botao_filtro" type="race">Gato</Button>
            <Button className="botao_filtro" type="race">Roedores</Button>
          </div>
          <div className="outros">
            <Button className="botao_filtro" type="race">Outros</Button>
          </div>

        </div>

        <div className="raca">
          <p className="text_s">Raça</p>
          <div className="select_r">
            <select className="select" type="race" />
          </div>
        </div>

        <p className="text_s">Sexo</p>
        <div className="sexo">
          <Button className="botao_filtro" type="race">Macho</Button>
          <Button className="botao_filtro" type="race">Fêmea</Button>
        </div>

        <p className="text_s">Faixa etária</p>
        <div className="faixa_etaria">
          <Button className="botao_filtro" type="race">Filhote</Button>
          <Button className="botao_filtro" type="race">Adulto</Button>
          <Button className="botao_filtro" type="race">Idoso</Button>
        </div>

        <p className="text_s">Porte</p>
        <div className="porte">
          <Button className="botao_filtro" type="race">Pequeno</Button>
          <Button className="botao_filtro" type="race">Médio</Button>
          <Button className="botao_filtro" type="race">Grande</Button>
        </div>

        <div className="botao_entrar">
          <Button rel="botao">
            Entrar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Filtro;