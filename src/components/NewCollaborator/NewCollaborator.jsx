import "./newCollaborator.css";

import Modal from 'react-modal';
import { useState } from "react";
import buscaCep from "../../services/api-buscaCep";
import { storage } from '../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { AuthContext } from "../../contexts/Auth";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";

export function NewCollaborator() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {newCollaborator} = useContext(AuthContext)
    
    const [isOpenModalProcess, setIsOpenModaProcess] = useState(false);
    const [ profession, setProfession] = useState("");
    const [ name, setName] = useState("");
    const [ schooling, setSchooling] = useState("");
    const [ rg, setRg] = useState("");
    const [ cpf, setCpf] = useState("");
    const [ birthday, setBirthday] = useState("");
    const [ register, setRegister] = useState("");
    const [ email, setEmail] = useState("");
    const [ phone, setPhone] = useState("");
    const [ whatsapp, setWhatsapp] = useState("");
    const [ road, setRoad] = useState("");
    const [ number, setNumber] = useState("");
    const [ district, setDistrict] = useState("");
    const [ city, setCity] = useState("");
    const [ uf, setUf] = useState("");
    const [ instagram, setInstagram] = useState("");
    const [ facebook, setFacebook] = useState("");
    const [ linkedin, setLinkedin] = useState("");
    const [ twitter, setTwitter] = useState("");
    const [ bank, setBank] = useState("");
    const [ agency, setAgency] = useState("");
    const [ typeAccount, setTypeAccount] = useState("");
    const [ account, setAccount] = useState("");
    const [ typeKeyPix, setTypeKeyPix] = useState("");
    const [ keypix, setKeypix] = useState("");
    const [cep, setCep] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');

    const profile = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"


    function handleOpenModalProcess(e) {
        e.preventDefault();
          setIsOpenModaProcess(true)
        }
      
        function handleCloseModalProcess(e) {
          e.preventDefault();
          setIsOpenModaProcess(false);
        }

        function handleFile(e) {
            // console.log(e.target.files[0])
            if(e.target.files[0]){
                const image = e.target.files[0];
                if(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
                    setImageAvatar(image);
                    setAvatarUrl(URL.createObjectURL(e.target.files[0]));
                    console.log(avatarUrl);
                 } else {
                     console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                     setImageAvatar(null);
                     return null;
                 }
             }
         }
         

         async function handleNewClient(e) {
            e.preventDefault();
            toast.info("Criando conta. Aguarde...")
                    //Avatar
            const uuid = uuidv4();
    
            let newAvatarUrlFirebase = ref(storage, `images/avatar/${uuid}`);
            let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
            let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
                
            console.log(uploadAvatar.ref.name, photoUrlAvatar);
            handleNewCollaborator(photoUrlAvatar)
          }

        function handleNewCollaborator(avatarLink) {
            const idCompany = user.id;
            newCollaborator({idCompany, avatar: avatarLink, profession, name, schooling, rg, cpf, birthday, register,
                email, phone, whatsapp, road, number, district, city, uf,
                instagram, facebook, linkedin, twitter,
                bank, agency, typeAccount, account, typeKeyPix, keypix,})
        }

        function handleNewTipeCollaborator(e) {
            setProfession(e.target.value)
            console.log(e.target.value)
        }

        function handleNewTypeKeyPix(e) {
            setTypeKeyPix(e.target.value);
            console.log(e.target.value)
            if(e.target.value === "E-mail") {
                setKeypix(email)
            } else if(e.target.value === "Telefone") {
                setKeypix(phone)
            } else if(e.target.value === "Whatsapp") {
                setKeypix(whatsapp)
            } else if(e.target.value === "CPF") {
                setKeypix(cpf)
            }  else if(e.target.value === "Chave Aleatória") {
                setKeypix("")
            }  else if(e.target.value === "") {
                setKeypix("")
            } 
        }

        function handleNewTypeAccount(e) {
            setTypeAccount(e.target.value);
            console.log(e.target.value)
        }

        function handleNewSchooling(e) {
            setSchooling(e.target.value);
            console.log(e.target.value)
        }

        async function handleNewCep(e) {
            e.preventDefault();
            console.log("");
                await buscaCep(`${cep}/json`).then((res) => {
                    console.log(res.data);
                    setCity(res.data.localidade);
                    setUf(res.data.uf);
                })

        }
        
        

        Modal.setAppElement('#root');
    return (
        <>
         <button className="link" onClick={handleOpenModalProcess}>+ Novo funcionário</button>


        <Modal isOpen={isOpenModalProcess} onRequestClose={handleCloseModalProcess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
 
        <div className="content-moda-Process">
        <div className="itensModal-Process">
            <h3>Novo colaborador</h3>

            <div className="form">
                <div className="DataInputs">
                <div className="Avatar">
                        <h5>Foto</h5>
                        <h6>(clique na imagem para alterar)</h6>
                <label className="label-avatar">
                            <span></span>
                            <input type="file" accept="image/*" onChange={handleFile} required/><br />
                            <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                        </label>
                    </div>
                <div className="dataInputUnic">
                    <h5>Função</h5>
                        <select value={profession} onChange={handleNewTipeCollaborator}>
                            <option value="">Escolha</option>
                            <option value="Advogado(a)">Advogado(a)</option>
                            <option value="Corretor(a)">Corretor(a)</option>
                            <option value="Atendente">Atendente</option>
                            <option value="Secretária(o)">Secretária(o)</option>
                            <option value="Vendedor(a)">Vendedor(a)</option>
                            <option value="Representante Comercial">Representante Comercial</option>
                            <option value="Designer">Designer</option>
                            <option value="Programador(a)">Programador(a)</option>
                            <option value="Diretor(a)">Diretor(a)</option>
                            <option value="Gerente">Gerente</option>
                            <option value="Supervisor(a)">Supervisor(a)</option>
                            <option value="CEO">CEO</option>
                            <option value="Fachineiro(a)">Fachineiro(a)</option>
                            <option value="Zelador(a)">Zelador(a)</option>
                            <option value="Porteiro(a)">Porteiro(a)</option>
                            <option value="Motorista">Motorista</option>
                            <option value="Estágiario(a)">Estágiario(a)</option>
                            <option value="Jovem aprendiz">Jovem aprendiz</option>
                        </select>
                    </div>

                    <div className="dataInputUnic">
                        <h5>Nome completo</h5>                   
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="dataInputUnic">
                    <h5>Escolaridade</h5>
                        <select value={schooling} onChange={handleNewSchooling}>
                            <option value="">Escolha</option>
                            <option value="Ensino Fundamental">Ensino Fundamental</option>
                            <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                            <option value="Ensino Médio">Ensino Médio</option>
                            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                            <option value="Curso Técnico">Curso Técnico</option>
                            <option value="Curso Técnico Completo">Curso Técnico Completo</option>
                            <option value="Ensino Superior">Ensino Superior</option>
                            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                            <option value="Pós Graduação">Pós Graduação</option>
                            <option value="Pós Graduação Completo">Pós Graduação Completo</option>
                            <option value="Mestrado">Mestrado</option>
                            <option value="Mestrado completo">Mestrado completo</option>
                            <option value="Doutorado">Doutorado</option>
                            <option value="Doutorado Completo">Doutorado Completo</option>
                        </select>
                    </div>

                    <div className="dataInputUnic">
                        <h5>RG</h5>
                    <input type="text" value={rg} onChange={e => setRg(e.target.value)}/>
                    </div>

                    <div className="dataInputUnic">
                        <h5>CPF</h5>
                    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </div>

                    <div className="dataInputUnic">
                        <h5>Data de Nascimento</h5>
                    <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)}/>
                    </div>
                    <div className="dataInputUnic">
                        <h5>Registro: Creci, OAB e etc...</h5>
                    <input type="text" value={register} onChange={e => setRegister(e.target.value)}/>
                    </div>
                </div>

                <div className="DataInputs">
                    <div className="dataInputUnic">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Telefone</h5>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Whatsapp</h5>
                        <input type="text" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    </div>
                </div>
                <div className="DataInputs">
                <div className="searchInputs">
                        <input type="text" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)}/>
                        <button onClick={handleNewCep}><IoSearchOutline /></button>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Rua</h5>
                    <input type="text" value={road} onChange={e => setRoad(e.target.value)}/>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Número</h5>
                    <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
                    </div>

                    <div className="dataInputUnic">
                    <h5>Bairro</h5>
                    <input type="text" value={district} onChange={e => setDistrict(e.target.value)}/>
                    </div>   

                    <div className="dataInputUnic">
                    <h5>Cidade</h5>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
                    </div>           

                    <div className="dataInputUnic">
                    <h5>UF</h5>
                    <input type="text" value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>             
                  
                </div>
                <div className="DataInputs">
                    <div className="dataInputUnic">
                    <h5>Instagram</h5>
                    <input type="text" value={instagram} onChange={e => setInstagram(e.target.value)}/>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Facebook</h5>
                    <input type="text" value={facebook} onChange={e => setFacebook(e.target.value)}/>
                    </div>

                <div className="dataInputUnic">
                    <h5>Linkedin</h5>
                    <input type="text" value={linkedin} onChange={e => setLinkedin(e.target.value)}/>
                    </div>
                <div className="dataInputUnic">
                    <h5>Twitter</h5>
                    <input type="text" value={twitter} onChange={e => setTwitter(e.target.value)}/>
                    </div>
                </div>
                <div className="DataInputs">
                    <div className="dataInputUnic">
                    <h5>Banco</h5>
                    <input type="text" value={bank} onChange={e => setBank(e.target.value)}/>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Agência</h5>
                    <input type="text" value={agency} onChange={e => setAgency(e.target.value)}/>
                    </div>

                <div className="dataInputUnic">
                    <h5>Tipo de Conta</h5>
                    <select value={typeAccount} onChange={handleNewTypeAccount}>
                            <option value="">Escolha</option>
                            <option value="Corrente">Corrente</option>
                            <option value="Poupança">Poupança</option>
                            <option value="Salário">Salário</option>
                        </select>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Conta</h5>
                    <input type="text" value={account} onChange={e => setAccount(e.target.value)}/>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Tipo Chave Pix</h5>
                    <select value={typeKeyPix} onChange={handleNewTypeKeyPix}>
                            <option value="">Escolha</option>
                            <option value="Chave Aleatória">Chave Aleatória</option>
                            <option value="E-mail">E-mail</option>
                            <option value="Telefone">Telefone</option>
                            <option value="Whatsapp">Whatsapp</option>
                            <option value="CPF">CPF</option>
                        </select>
                    </div>
                <div className="dataInputUnic">
                    <h5>Chave Pix</h5>
                    <input type="text" value={keypix} onChange={e => setKeypix(e.target.value)}/>
                    </div>
             
                </div>

                <div className="ButtonsForm">
                <button className="send" onClick={handleNewClient}>Cadastrar</button>
                <button className="cancel" onClick={handleCloseModalProcess}>X Cancelar</button>
                </div>
            </div>
        </div>
        </div>
        </Modal>
        </>
    )
}