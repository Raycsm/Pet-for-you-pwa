import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {useTheme} from './styles/Theme/UseTheme'
import StylesGlobal from "./styles/StylesGlobal/StylesGlobal";
import DesktopBreakpoint from "./Components/responsive_utilities/desktop_breakpoint";
import TabletBreakpoint from "./Components/responsive_utilities/tablet_breakpoint";
import PhoneBreakpoint from "./Components/responsive_utilities/phone_breakpoint";

import Login from './Pages/Login/Login'
import EsqueciSenha from "./Pages/EsqueciSenha/EsqueciSenha";
import Home from "./Pages/Home/Home";

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
              <Route path="/Home" exact element={<Home />} />
            </Routes>
        </Router> 
        </div> 
      </ThemeProvider>
      }  
      </>
    );
  }

export default App;