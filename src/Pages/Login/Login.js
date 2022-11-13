import React from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Links from "../../Components/Link/Link";
import Logo from "../../Components/Logo/Logo";
import Pets from "../../Components/Pets/Pets";
import "./Login.css";

export default function Login() {

  return (

    <>
      <main>
       
        <div>
            <Logo className="logo" alt='logo' width={150} height={100} />
        </div>

        <form>
          
          <div>
            <Input className="input" name="email" placeholder="E-mail" type="email" />
          </div>
          
          <div>
            <Input className="input" name="senha" placeholder="Senha" type="password"/>
          </div>
          
          <div>
            <Links className="senha_link" to="/Esqueciasenha">Esqueci a senha</Links>
          </div>
          
          <div className="botao">
            <Button rel="botao">
              Entrar
            </Button>
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