import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import '../Filtro/Filtro.css';

export default function Filtro() {
  const [distance, setDistance] = useState(100);
  const [dog, setDog] = useState(false);
  const [bird, setBird] = useState(false);
  const [cat, setCat] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [others, setOthers] = useState(false);
  const [filhote, setFilhote] = useState(false);
  const [adulto, setAdulto] = useState(false);
  const [idoso, setIdoso] = useState(false);
  const [pequeno, setPequeno] = useState(false);
  const [medio, setMedio] = useState(false);
  const [grande, setGrande] = useState(false);

  const handleChange = (event, newDistance) => {
    setDistance(newDistance);
  };

  return (
    <div className="main">
      <h1 className="titulo">Filtros</h1>

      <form>
        <div className="raio_km">
          <p className="text_s">Raio em KM</p>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider aria-label="Volume" value={distance} onChange={handleChange} />
          </Stack>
        </div>

        <p className="text_s">Eu quero adotar</p>
        <div className="adotar">
          <div className="top">
            <Button className="botao_filtro" value={dog} type="dog">Cachorro</Button>
            <Button className="botao_filtro" value={bird} type="bird">Pássaro</Button>
          </div>
          <div className="down">
            <Button className="botao_filtro" value={cat} type="cat">Gato</Button>
            <Button className="botao_filtro" value={mouse} type="other">Roedores</Button>
          </div>
          <div className="outros">
            <Button className="botao_filtro" value={others} type="race">Outros</Button>
          </div>

        </div>

        <p className="text_s">Sexo</p>
        <div className="sexo">
          <Button className="botao_filtro" value={dog} type="macho">Macho</Button>
          <Button className="botao_filtro" value={dog} type="femea">Fêmea</Button>
        </div>

        <p className="text_s">Faixa etária</p>
        <div className="faixa_etaria">
          <Button className="botao_filtro" value={filhote} type="filho">Filhote</Button>
          <Button className="botao_filtro" value={adulto} type="adulto">Adulto</Button>
          <Button className="botao_filtro" value={idoso} type="idoso">Idoso</Button>
        </div>

        <p className="text_s">Porte</p>
        <div className="porte">
          <Button className="botao_filtro" value={pequeno} type="pequeno">Pequeno</Button>
          <Button className="botao_filtro" value={medio} type="medio">Médio</Button>
          <Button className="botao_filtro" value={grande} type="grande">Grande</Button>
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