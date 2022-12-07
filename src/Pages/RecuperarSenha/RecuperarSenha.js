/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../Components/Logo/Logo";
import Pets from "../../Components/Pets/Pets";
import Links from "../../Components/Link/Link";
import ButtonMain from "../../Components/ButtonMain/ButtonMain";
import BackButton from "../../Components/BackButton/BackButton";
import Input from "../../Components/Input/Input"
import "./RecuperarSenha.css"

const RecuperarSenha = () => {

  return (

    <>
      <main>
            <BackButton/>
        <div>
            <Logo alt='logo-senha' className="logo-senha" width={150} height={100} />
        </div>

        <form>
          <div>
            <h1 className="titulo-senha">Recuperar Senha</h1>
          </div>
          
          <div>
            <Input className="input_s" name="email" placeholder="Digite o e-mail cadastrado" type="email" />
          </div>
          
          <div>
            <ButtonMain className="botao_s" rel="botao">
              Recuperar
            </ButtonMain>
          </div>
          
          <div>
            <p className="text_s">Já possui uma conta? <Links to="/" className="link-login">Faça Login</Links></p>
          </div>  
        </form>
      
        <div style={{marginTop:90}}>
          <Pets className="pets" alt='pets' width={320} height={180} />
        </div>

      </main>
    </>
  );
}

export default RecuperarSenha;