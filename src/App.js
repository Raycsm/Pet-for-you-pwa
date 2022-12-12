import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import DesktopBreakpoint from "./componentes/responsive_utilities/desktop_breakpoint";
import PhoneBreakpoint from "./componentes/responsive_utilities/phone_breakpoint";
import TabletBreakpoint from "./componentes/responsive_utilities/tablet_breakpoint";
import StylesGlobal from "./estilos/StylesGlobal/StylesGlobal";
import { useTheme } from './estilos/Theme/UseTheme';

import Adocao from './paginas/Adocao/Adocao';
import CadastrarPet from './paginas/CadastrarPet/CadastrarPet';
import CriarConta from './paginas/CriarConta/CriarConta';
import Filtro from './paginas/Filtro/Filtro';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import MeuPerfil from "./paginas/MeuPerfil/MeuPerfil";
import MeuPet from "./paginas/MeuPet/MeuPet";
import RecuperarSenha from "./paginas/RecuperarSenha/RecuperarSenha";


function App(){

  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [theme, themeLoaded]);

    return (
      <>
      {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
      <StylesGlobal />
        <div style={{fontFamily: selectedTheme.font}}>
          <DesktopBreakpoint/>
          <TabletBreakpoint/>
          <PhoneBreakpoint/>
          <Router>
              <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/RecuperarSenha" exact element={<RecuperarSenha />} />
                <Route path="/Criarconta" exact element={<CriarConta />} />
                <Route path="/Home" exact element={<Home />} />
                <Route path="/Adocao" exact element={<Adocao />} />
                <Route path="/Meuperfil" exact element={<MeuPerfil />} />
                <Route path="/Filtro" exact element={<Filtro />} />
                <Route path="/Criarconta" exact element={<CriarConta />} />
                <Route path="/Cadastrarpet" exact element={<CadastrarPet />} />
                <Route path="/Meuspets" exact element={<MeuPet />} />
              </Routes>
        </Router> 
        </div> 
      </ThemeProvider>
      }  
      </>
    );
  }

export default App;