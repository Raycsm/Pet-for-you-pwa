import React, { useState } from "react";
import BackButton from "../../componentes/BackButton/BackButton";
import BottomMenu from "../../componentes/BottomMenu/BottomMenu";
import ButtonMain from "../../componentes/ButtonMain/ButtonMain";
import Buttons from "../../componentes/Buttons/Buttons";
import Input from "../../componentes/Input/Input";
import InputDisabled from "../../componentes/Input/InputDisabled/InputDisabled";
import ProfilePhoto from "../../componentes/ProfilePhoto/ProfilePhoto";
import SelectEstado from "../../componentes/Selects/SelectEstado/SelectEstado";
import "./MeuPerfil.css";

export default function MeuPerfil() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("")
	const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("")
	

  return (
    <>
      <main>
        <div>
              <BackButton/>
        </div>

        <div>
            <h1 className="titulo-meu-perfil">Meu perfil</h1>
        </div>

        <form>
            <div>
              <ProfilePhoto />
            </div>

            <div>
              <InputDisabled 
              className="input-meu-perfil" 
              name="nome" 
              placeholder="Nome" 
              type="text"
              defaultValue={nome}
              onChangeText={setNome}
              disabled="true" />
            </div>

            <div>
              <InputDisabled 
              className="input-meu-perfil" 
              name="cpf" 
              placeholder="CPF" 
              type="text"
              defaultValue={cpf}
              onChangeText={setCpf}
              disabled="true" />
            </div>
                    
            <div>
              <Input 
              className="input-meu-perfil" 
              name="email" 
              placeholder="E-mail" 
              type="email"
              defaultValue={email}
              onChangeText={setEmail} />
            </div>
            
            <div>
              <Input 
              className="input-meu-perfil" 
              name="senha" 
              placeholder="Senha" 
              type="password"
              defaultValue={senha}
              onChangeText={setSenha} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="telefone" 
              placeholder="Telefone" 
              type="text"
              defaultValue={telefone}
              onChangeText={setTelefone} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="endereço" 
              placeholder="Endereço" 
              type="text"
              defaultValue={endereco}
              onChangeText={setEndereco} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="bairro" 
              placeholder="Bairro" 
              type="text" 
              defaultValue={bairro}
              onChangeText={setBairro}/>
            </div>

            <div>
              <SelectEstado 
              defaultValue={estado}
              onChange={e => setEstado(e.target.value)} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="cidade" 
              placeholder="Cidade" 
              type="text" 
              defaultValue={cidade}
              onChangeText={setCidade}/>
            </div>
          
            <div style={{marginTop:40}}>
              <ButtonMain 
              className="botao-meu-perfil"
              >
                Salvar
              </ButtonMain>
            </div>
            <div style={{marginTop:40}}>
              <Buttons 
              className="botao-excluir-conta"
              >
                Excluir Conta
              </Buttons>
            </div>
        </form>
        <div>
          <BottomMenu />
      </div>
      </main>
    </>
  );
}