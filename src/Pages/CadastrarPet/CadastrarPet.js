/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import ButtonMain from "../../Components/ButtonMain/ButtonMain";
import Input from "../../Components/Input/Input";
import SelectEstado from "../../Components/Selects/SelectEstado/SelectEstado";
import ProfilePhoto from "../../Components/ProfilePhoto/ProfilePhoto";
import BackButton from '../../Components/BackButton/BackButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import "./CadastrarPet.css"


const ColorSwitch = withStyles({
    switchBase: {
      color: '#DB652F',
      '&$checked': {
        color: '#DB652F',
      },
      '&$checked + $track': {
        backgroundColor: '#DB652F',
      },
    },
    checked: {},
    track: {},
  })(Switch);

const OrangeRadio = withStyles({
root: {
    color: '#DB652F',
    '&$checked': {
    color: '#DB652F',
    },
},
checked: {},
})((props) => <Radio color="default" {...props} />);

export default function CadastrarPet() {

    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
	const [tipopet, setTipopet] = useState("");
	const [idade, setIdade] = useState("");
	const [email, setEmail] = useState("");
	const [descricao, setDescricao] = useState("");
	const [porte, setPorte] = useState("");
    const [peso, setPeso] = useState("");
	const [telefone, setTelefone] = useState("")
    const [bairro, setBairro] = useState("")
	const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("")
    const [checkedcastrado, setCheckedcastrado] = useState(false);
    const [checkedvacinado, setCheckedvacinado] = useState(false);
    const [sexo, setSexo] = useState('Fêmea');

    const handleChange = (event) => {
        setSexo(event.target.value);
    };

    const toggleCheckedVacinado = () => {
        setCheckedvacinado((prev) => !prev);
      };

    const toggleCheckedCastrado = () => {
    setCheckedcastrado((prev) => !prev);
    };
	
    const handleChangeDescricao = (event) => {
        setDescricao(event.target.value);
      };

  return (
    <>
      <main>
        <div>
            <div>
                <BackButton/>
            </div>
            <h1 className="titulo-cadastrar-pet">Cadastrar Pet</h1>
        </div>

        <form>
            <div>
              <ProfilePhoto />
            </div>
            <div>
              <select 
                defaultValue={tipopet}
                onChange={e => setTipopet(e.target.value)}
                className="select-pet"
                required
                > 
                  <option>Tipo de pet</option>
                  <option value={'Cachorro'}>Cachorro</option>
                  <option value={'Gato'}>Gato</option>
                  <option value={'Roedor'}>Roedor</option>
                  <option value={'Passáro'}>Passáro</option>
                  <option value={'Outros'}>Outros</option>
              </select> 
            </div>         
    
            <div>
              <Input 
              className="input-pet" 
              name="nome" 
              placeholder="Digite o nome" 
              type="text"
              defaultValue={nome}
              onChangeText={setNome}
              required />
            </div>

            <div>
              <Input 
              className="input-pet" 
              name="telefone" 
              placeholder="Digite a raça" 
              type="text"
              defaultValue={raca}
              onChangeText={setRaca}
              required />
            </div>

            <div>
              <select 
                defaultValue={porte}
                onChange={e => setPorte(e.target.value)}
                className="select-pet"
                required
                > 
                  <option>Porte do animal</option>
                  <option value={'Pequeno'}>Pequeno</option>
                  <option value={'Médio'}>Médio</option>
                  <option value={'Grande'}>Grande</option>
              </select>
            </div> 

            <div>
              <select 
                defaultValue={peso}
                onChange={e => setPeso(e.target.value)}
                className="select-pet"
                required > 
                  <option>Peso estimado</option>
                  <option value={'0-2kg'}>0-2kg</option>
                  <option value={'2-5kg'}>2-5kg</option>
                  <option value={'5-10kg'}>5-10kg</option>
                  <option value={'+10kg'}>+10kg</option>
              </select>
            </div> 

            <div>
              <Input 
              className="input-pet" 
              name="idade" 
              placeholder="Digite a idade aproximada" 
              type="text"
              defaultValue={idade}
              onChangeText={setIdade}
              required />
            </div>
            <div className="container-pet">
                <div className="box-pet-sexo">
                    <div className="vacinado">
                        <FormControlLabel
                        control={<ColorSwitch checked={checkedvacinado} 
                        onChange={toggleCheckedVacinado} />}
                        label="Vacinado" 
                        required/>
                    </div>
                    <div>
                        <FormControlLabel
                        control={<ColorSwitch checked={checkedcastrado} 
                        onChange={toggleCheckedCastrado} />}
                        label="Castrado"
                        required />
                    </div>
                </div>
        
                <div className="radio-group-sexo">
                    <FormControl>
                        <RadioGroup 
                        aria-label="sexo" 
                        name="sexo" 
                        value={sexo} 
                        onChange={handleChange}
                        required>
                            <FormControlLabel value="fêmea" control={<OrangeRadio />} label="Fêmea" />
                            <FormControlLabel value="macho" control={<OrangeRadio />} label="Macho" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

            <div>
              <Input 
              className="input-pet" 
              name="email" 
              placeholder="Digite seu e-mail" 
              type="email" 
              defaultValue={email}
              onChangeText={setEmail}/>
            </div>

            <div>
              <Input 
              className="input-pet" 
              name="telefone" 
              placeholder="Digite seu telefone" 
              type="text" 
              defaultValue={telefone}
              onChangeText={setTelefone}
              />
            </div>

            <div>
              <Input 
              className="input-pet" 
              name="bairro" 
              placeholder="Digite seu bairro" 
              type="text" 
              defaultValue={bairro}
              onChangeText={setBairro}
              required/>
            </div>

            <div>
              <SelectEstado 
              defaultValue={estado}
              onChange={e => setEstado(e.target.value)} />
            </div>

            <div>
              <Input 
              className="input-pet" 
              name="cidade" 
              placeholder="Digite sua cidade" 
              type="text" 
              defaultValue={cidade}
              onChangeText={setCidade}
              required/>
            </div>

            <div>
                <textarea 
                    className="input-text-area"
                    placeholder="Descrição"
                    multiline
                    variant="outlined"
                    Value={descricao}
                    onChange={handleChangeDescricao}
                />
            </div>
          
            <div>
              <ButtonMain 
              className="botao-cadastrar-pet"
              
              >
                Cadastrar Pet
              </ButtonMain>
            </div>
        
        </form>
        <div>
            <BottomMenu />
      </div>
      </main>
    </>
  );
}