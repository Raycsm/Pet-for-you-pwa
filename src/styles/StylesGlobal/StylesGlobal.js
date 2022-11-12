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

  a {
    color: ${({ theme }) => theme.colors.link.text};
  };

  .logo{
    margin-bottom: 40px;
    margin-left: 80px;
    margin-top: 30px;
}
  .titulo{
    text-align: center;
    font-size:22px;
    font-weight: bolder;  
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

  .select:focus{
    outline-color:  #DB652F; 
  }

  .input:focus{
    outline-color:  #DB652F; 
  }

`;

export default StylesGlobal;