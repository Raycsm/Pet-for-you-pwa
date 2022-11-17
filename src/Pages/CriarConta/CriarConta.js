/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import Logo from "../../Components/Logo/Logo";
import Links from "../../Components/Link/Link";
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input";
import SelectEstado from "../../Components/Selects/SelectEstado/SelectEstado";
import ProfilePhoto from "../../Components/ProfilePhoto/ProfilePhoto";
import "./CriarConta.css"

export default function CriarConta() {

  const [tipopessoa, setTipopessoa] = useState("");
  const [nome, setNome] = useState("");
  const [razaosocial, setRazaoSocial] = useState("");
	const [cpf, setCpf] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmarsenha, setConfirmarsenha] = useState("");
	const [telefone, setTelefone] = useState("")
	const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("")
	const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("")
	

  return (
    <>
      <main>
       
        <div>
            <Logo className="logo" alt='logo' width={150} height={100} />
        </div>

        <form>
            <div>
              <ProfilePhoto />
            </div>
            <div>
              <select 
                defaultValue={tipopessoa}
                onChange={e => setTipopessoa(e.target.value)}
                className="tipo-pessoa"
                required
                > 
                  <option>Tipo de pessoa</option>
                  <option value={'f'}>Pessoa Física</option>
                  <option value={'j'}>Pessoa Jurídica</option>
              </select>
              {tipopessoa === 'f' && (
              <div>
                <div>
                  <Input className="input-conta" 
                  name="nome" 
                  placeholder="Digite seu nome" 
                  type="text" 
                  defaultValue={nome} 
                  onChangeText={setNome}/>
                </div>

                <div>
                  <Input 
                  className="input-conta" 
                  name="cpf" 
                  placeholder="Digite seu CPF" 
                  type="text" 
                  defaultValue={cpf} 
                  onChangeText={setCpf}/>
                </div>
              </div>
              )}
              {tipopessoa === 'j' && (
              <div>
                <div>
                  <Input 
                  className="input-conta" 
                  name="razao-social" 
                  placeholder="Digite a razão social" 
                  type="text" 
                  defaultValue={razaosocial}
                  onChangeText={setRazaoSocial}/>
                </div>

                <div>
                  <Input 
                  className="input-conta" 
                  name="cnpj" 
                  placeholder="Digite o CNPJ" 
                  type="text" 
                  defaultValue={cnpj}
                  onChangeText={setCnpj}/>
                </div>
              </div>
              )}
            </div>             
    
            <div>
              <Input 
              className="input-conta" 
              name="email" 
              placeholder="Digite seu e-mail" 
              type="email"
              defaultValue={email}
              onChangeText={setEmail} />
            </div>
            
            <div>
              <Input 
              className="input-conta" 
              name="senha" 
              placeholder="Digite sua senha" 
              type="password"
              defaultValue={senha}
              onChangeText={setSenha} />
            </div>

            <div>
              <Input 
              className="input-conta" 
              name="confirme-senha" 
              placeholder="Confirme sua senha" 
              type="password" 
              defaultValue={confirmarsenha}
              onChangeText={setConfirmarsenha}/>
            </div>

            <div>
              <Input 
              className="input-conta" 
              name="telefone" 
              placeholder="Digite seu telefone" 
              type="text"
              defaultValue={telefone}
              onChangeText={setTelefone} />
            </div>

            <div>
              <Input 
              className="input-conta" 
              name="endereço" 
              placeholder="Digite seu endereço" 
              type="text"
              defaultValue={endereco}
              onChangeText={setEndereco} />
            </div>

            <div>
              <Input 
              className="input-conta" 
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
              className="botao-criar-conta"
              
              >
                Criar Conta
              </Button>
            </div>
            
            <div>
              <p className="text-criar-conta">Já tem uma conta? <Links to="/" className="link">Faça Login</Links></p>
            </div>
        
        </form>

      </main>
    </>
  );
}