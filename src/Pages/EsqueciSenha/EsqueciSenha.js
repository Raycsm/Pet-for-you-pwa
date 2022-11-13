/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../Components/Logo/Logo";
import Pets from "../../Components/Pets/Pets";
import Links from "../../Components/Link/Link";
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import "./EsqueciSenha.css"

const EsqueciSenha = () => {

  return (

    <>
      <main>
       
        <div>
            <Logo className="logo" alt='logo' width={150} height={100} />
        </div>

        <form>
          <div>
            <h1 className="titulo">Recuperar Senha</h1>
          </div>
          
          <div>
            <Input className="input_s" name="email" placeholder="Digite o e-mail cadastrado" type="email" />
          </div>
          
          <div>
            <Button className="botao_s" rel="botao">
              Recuperar
            </Button>
          </div>
          
          <div>
            <p className="text_s">Já possui uma conta? <Links to="/" className="link">Faça Login</Links></p>
          </div>  
        </form>
      
        <div>
          <Pets className="pets_s" alt='pets' width={320} height={180} />
        </div>

      </main>
    </>
  );
}

export default EsqueciSenha;