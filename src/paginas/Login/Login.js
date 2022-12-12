import React from "react";
import ButtonMain from "../../componentes/ButtonMain/ButtonMain";
import Input from "../../componentes/Input/Input";
import Links from "../../componentes/Link/Link";
import Logo from "../../componentes/Logo/Logo";
import Pets from "../../componentes/Pets/Pets";
import "./Login.css";

export default function Login() {

  return (

    <>
      <main>
       
        <div>
            <Logo className="logo-login" alt='logo' width={150} height={100} />
        </div>

        <form>
          
          <div>
            <Input className="input" name="email" placeholder="E-mail" type="email" />
          </div>
          
          <div>
            <Input className="input" name="senha" placeholder="Senha" type="password"/>
          </div>
          
          <div style={{marginLeft:190}}>
            <p className="text"><Links className="link" to="/Recuperarsenha">Esqueci a senha</Links></p>
          </div>
          
          <div>
            <ButtonMain rel="botao" className="botao-login">
              Entrar
            </ButtonMain>
          </div>
          
          <div>
            <p className="text">Não tem uma conta? <Links to="/Criarconta" className="link">Crie Conta</Links></p>
          </div> 
          
          <div>
            <p className="text"><Links to="/Home" className="link">Entrar sem login</Links></p>
          </div> 
        
        </form>
      
        <div>
          <Pets className="pets" alt='pets' width={320} height={180} />
        </div>

      </main>
    </>
  );
}