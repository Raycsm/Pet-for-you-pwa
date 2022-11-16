import React from "react";
import Button from "../../componentes/Button/Button";

function Filtro() {
  return (
    <div>
      <h1>Filtros</h1>

      <form>
        <div>
          <p>Raio em KM</p>
        </div>

        <div>
          <p>Eu quero adotar</p>
          <div>
            <Button className="botao" type="race">Cachorro</Button>
            <Button className="botao"type="race">Pássaro</Button>
          </div>
          <div>
            <Button className="botao" type="race">Gato</Button>
            <Button className="botao" type="race">Roedores</Button>
          </div>
          <Button className="botao" type="race">Outros</Button>
        </div>

        <div>
          <p>Raça</p>
          <select className="select" type="race" />
        </div>

        <div>
          <p>Sexo</p>
          <Button className="botao" type="race">Macho</Button>
          <Button className="botao" type="race">Fêmea</Button>
        </div>

        <div>
          <p>Faixa etária</p>
          <Button className="botao" type="race">Filhore</Button>
          <Button className="botao" type="race">Adulto</Button>
          <Button className="botao" type="race">Idoso</Button>
        </div>

        <div>
          <p>Porte</p>
        </div>
          <Button className="botao" type="race">Pequeno</Button>
          <Button className="botao" type="race">Médio</Button>
          <Button className="botao" type="race">Grande</Button>

        <div className="botao">
          <Button rel="botao">
            Entrar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Filtro;