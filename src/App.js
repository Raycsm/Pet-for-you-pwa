import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import DesktopBreakpoint from "./Components/responsive_utilities/desktop_breakpoint";
import PhoneBreakpoint from "./Components/responsive_utilities/phone_breakpoint";
import TabletBreakpoint from "./Components/responsive_utilities/tablet_breakpoint";
import StylesGlobal from "./styles/StylesGlobal/StylesGlobal";
import { useTheme } from './styles/Theme/UseTheme';

import EsqueciSenha from "./Pages/EsqueciSenha/EsqueciSenha"
import Filtro from "./Pages/Filtro/Filtro";
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import CriarConta from "./Pages/CriarConta/CriarConta";
import MeuPerfil from "./Pages/MeuPerfil/MeuPerfil";
import Adocao from "./Pages/Adocao/Adocao";
import CadastrarPet from "./Pages/CadastrarPet/CadastrarPet";

function App()  {

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
              <Route path="/Esqueciasenha" exact element={<EsqueciSenha />} />
              <Route path="/Criarconta" exact element={<CriarConta />} />
              <Route path="/Home" exact element={<Home />} />
              <Route path="/Adocao" exact element={<Adocao />} />
              <Route path="/Meuperfil" exact element={<MeuPerfil />} />
              <Route path="/Filtro" exact element={<Filtro />} />
              <Route path="/Cadastrarpet" exact element={<CadastrarPet />} />
            </Routes>
        </Router> 
        </div> 
      </ThemeProvider>
      }  
      </>
    );
  }

export default App;