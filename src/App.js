import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import DesktopBreakpoint from "./components/responsive_utilities/desktop_breakpoint";
import PhoneBreakpoint from "./components/responsive_utilities/phone_breakpoint";
import TabletBreakpoint from "./components/responsive_utilities/tablet_breakpoint";
import StylesGlobal from "./styles/StylesGlobal/StylesGlobal";
import { useTheme } from './styles/Theme/UseTheme';

import Adocao from './pages/Adocao/index';
import CadastrarPet from './pages/CadastrarPet/index';
import CriarConta from './pages/CriarConta/index';
import Filtro from './pages/Filtro/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import MeuPerfil from "./pages/MeuPerfil/index";
import MeuPet from "./pages/MeuPet/index";
import RecuperarSenha from "./pages/RecuperarSenha/index";


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