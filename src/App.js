import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import DesktopBreakpoint from "./Components/responsive_utilities/desktop_breakpoint";
import PhoneBreakpoint from "./Components/responsive_utilities/phone_breakpoint";
import TabletBreakpoint from "./Components/responsive_utilities/tablet_breakpoint";
import StylesGlobal from "./styles/StylesGlobal/StylesGlobal";
import { useTheme } from './styles/Theme/UseTheme';

import EsqueciSenha from "./pages/EsqueciSenha/EsqueciSenha";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';

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