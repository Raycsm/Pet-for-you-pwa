/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input";
import InputDisabled from "../../Components/Input/InputDisabled/InputDisabled"
import SelectEstado from "../../Components/Selects/SelectEstado/SelectEstado";
import ProfilePhoto from "../../Components/ProfilePhoto/ProfilePhoto";
import "./MeuPerfil.css"

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
            <p></p>
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
          
            <div>
              <Button 
              className="botao-meu-perfil"
              >
                Salvar
              </Button>
            </div>
            <div>
              <Button 
              className="botao-excluir-conta"
              >
                Excluir Conta
              </Button>
            </div>
        </form>

      </main>
    </>
  );
}