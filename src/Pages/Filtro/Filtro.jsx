import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import './Filtro.css';

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
    <Box
      marginTop={2}
      height={930}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <h1 className="titulo">Filtros</h1>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <h3 className="text">Raio em KM</h3>

            <Slider
              marginRight={4}
              sx={{
                width: 290,
                color: '#ba4a16',
              }}
              value={distance}
              onChange={handleChange}
            />
          </div>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <h3 className="text">Eu quero adotar</h3>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={dog} type="dog">Cachorro</Button>
              <Button className="botao_filtro" value={bird} type="bird">Pássaro</Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={cat} type="cat">Gato</Button>
              <Button className="botao_filtro" value={mouse} type="other">Roedores</Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={others} type="race">Outros</Button>
            </Stack>
          </div>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <h3 className="text">Sexo</h3>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Stack
                direction='row'
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Button className="botao_filtro" value={dog} type="macho">Macho</Button>
              </Stack>
              <Button className="botao_filtro" value={dog} type="femea">Fêmea</Button>
            </Stack>
          </div>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <h3 className="text">Faixa etária</h3>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={filhote} type="filho">Filhote</Button>
              <Button className="botao_filtro" value={adulto} type="adulto">Adulto</Button>
            </Stack>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={idoso} type="idoso">Idoso</Button>
            </Stack>
          </div>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <h3 className="text">Porte</h3>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={pequeno} type="pequeno">Pequeno</Button>
              <Button className="botao_filtro" value={medio} type="medio">Médio</Button>
            </Stack>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Button className="botao_filtro" value={grande} type="grande">Grande</Button>
            </Stack>
          </div>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <Button
              rel="botao"
              marginBottom={15}
            >
              Entrar
            </Button>
          </div>
        </Stack>
      </Stack>
    </Box>
  )
}