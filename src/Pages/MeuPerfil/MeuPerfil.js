/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input";
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

        <form>
            <div>
              <ProfilePhoto />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="nome" 
              placeholder="Digite seu nome" 
              type="text"
              defaultValue={nome}
              onChangeText={setNome} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="cpf" 
              placeholder="Digite seu CPF" 
              type="text"
              defaultValue={cpf}
              onChangeText={setCpf} />
            </div>
                    
            <div>
              <Input 
              className="input-meu-perfil" 
              name="email" 
              placeholder="Digite seu e-mail" 
              type="email"
              defaultValue={email}
              onChangeText={setEmail} />
            </div>
            
            <div>
              <Input 
              className="input-meu-perfil" 
              name="senha" 
              placeholder="Digite sua senha" 
              type="password"
              defaultValue={senha}
              onChangeText={setSenha} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="telefone" 
              placeholder="Digite seu telefone" 
              type="text"
              defaultValue={telefone}
              onChangeText={setTelefone} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="endereço" 
              placeholder="Digite seu endereço" 
              type="text"
              defaultValue={endereco}
              onChangeText={setEndereco} />
            </div>

            <div>
              <Input 
              className="input-meu-perfil" 
              name="bairro" 
              placeholder="Digite seu bairro" 
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
              className="input-conta" 
              name="cidade" 
              placeholder="Digite sua cidade" 
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