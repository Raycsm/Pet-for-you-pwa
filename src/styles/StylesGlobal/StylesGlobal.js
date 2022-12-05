import { createGlobalStyle } from "styled-components";

export const StylesGlobal = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding:0;
  };

  body {
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  };

  .titulo{
    text-align: center;
    font-size:22px;
    font-weight: bolder;  
}

.logo{
    margin-bottom: 40px;
    margin-left: 80px;
    margin-top: 30px;
}

.select {
        width: 310px;
        height: 50px;
        padding: 15px;
        border-radius: 10px;
        background-color: #E7E6E5;
        font-size: 14px;
        border: none;    
  };

`;

export default StylesGlobal;