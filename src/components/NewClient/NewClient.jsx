import "./newClient.css";

import { IoSearchOutline} from 'react-icons/io5';
import Modal from 'react-modal';
import { useContext, useState } from "react";
import buscaCep from "../../services/api-buscaCep";
import { toast } from 'react-toastify';
import { storage } from '../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../../contexts/Auth";

export function NewClient() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {newClientCompany} = useContext(AuthContext)
    const [isOpenModalProcess, setIsOpenModaProcess] = useState(false);
    const [typeClient, setTypeClient] = useState("Pessoa Física");

    const [idProcess, setIdProcess] = useState("");
    const [name, setName] = useState("");
    const [fantasyName, setFantasyName] = useState("");
    const [rgInscEst, setRgInscEst] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [road, setRoad] = useState("");
    const [number, setNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [interest, setInterest] = useState("");
    const [type, setType] = useState("");
    const [subtype, setSubtype] = useState("");
    const [cityPreference, setCityPreference] = useState("");
    const [ufPreference, setUfPreference] = useState("");
    const [attendance, setAttendance] = useState("");
    const [cep, setCep] = useState("");
    const [cepPreference, setCepPreference] = useState("");

    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');

    const profile = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"

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

    function handleOpenModalProcess(e) {
        e.preventDefault();
          setIsOpenModaProcess(true)
        }
      
        function handleCloseModalProcess(e) {
          e.preventDefault();
          setIsOpenModaProcess(false);
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
            continueNewClient(photoUrlAvatar)
          }

        function continueNewClient(avatarUrl) {
            console.log({idProcess, typeClient, name, fantasyName, rgInscEst, cpfCnpj, email, phone, whatsapp, avatar: avatarUrl, road,
                number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance,})

                newClientCompany({idProcess, idCompany: user.id,typeClient, name, fantasyName, rgInscEst, cpfCnpj, email, phone, whatsapp, avatar: avatarUrl, road,
                    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance,})
        }

        function handleNewTypeClient(e) {
            setTypeClient(e.target.value)
        }

        function handleNewInterest(e) {
            setInterest(e.target.value)
        }

        function  handleNewType(e) {
            setType(e.target.value)
        }

        function handleNewSubtype(e) {
            setSubtype(e.target.value)
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

        async function handleNewCepPreference(e) {
            e.preventDefault();
            console.log("");
                await buscaCep(`${cepPreference}/json`).then((res) => {
                    console.log(res.data);
                    setCityPreference(res.data.localidade)
                    setUfPreference(res.data.uf)
                })

        }

        

        Modal.setAppElement('#root');
    return (
        <>
         <button className="link" onClick={handleOpenModalProcess}>Novo cliente</button>


        <Modal isOpen={isOpenModalProcess} onRequestClose={handleCloseModalProcess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

        <div className="content-moda-Process">
        <div className="itensModal-Process">
            <h3>Novo cliente</h3>

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
                    <h5>Tipo de cliente</h5>
                        <select value={typeClient} onChange={handleNewTypeClient}>
                            <option value="Pessoa Física">Pessoa Física</option>
                            <option value="Pessoa Júridica">Pessoa Júridica</option>
                        </select>
                    </div>
                    <div className="dataInputUnic">
                        {
                        typeClient === "Pessoa Física" ? 
                        <h5>Nome completo</h5>
                            :
                            <h5>Razão Social</h5>
                        }
                    
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                       
                    </div>
                    <div className="dataInputUnic">
                    {
                        typeClient === "Pessoa Física" ? 
                        <h5>Nome de tratamento</h5>
                            :
                            <h5>Nome Fantasia</h5>
                        }
                    
                    <input type="text" value={fantasyName} onChange={e => setFantasyName(e.target.value)}/>
                    </div>
                    
                    <div className="dataInputUnic">
                    {
                        typeClient === "Pessoa Física" ? 
                        <h5>CPF</h5>
                            :
                            <h5>CNPJ</h5>
                        }  
                    
                    <input type="text" value={cpfCnpj} onChange={e => setCpfCnpj(e.target.value)}/>
                    </div>

                    <div className="dataInputUnic">
                    {
                        typeClient === "Pessoa Física" ? 
                        <h5>RG</h5>
                            :
                            <h5>Ins. Estadual (Opcional)</h5>
                        }   
                   
                    <input type="text" value={rgInscEst} onChange={e => setRgInscEst(e.target.value)}/>
                       
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
                    <h5>Estado</h5>
                    <input type="text" value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                </div>
                <div className="DataInputs">
                <div className="searchInputs">
                        <input type="text" placeholder="CEP" value={cepPreference} onChange={e => setCepPreference(e.target.value)}/>
                        <button onClick={handleNewCepPreference}><IoSearchOutline /></button>
                    </div>
                    <div className="dataInputUnic"> 
                    <h5>Interesse</h5>
                    <select value={interest} onChange={handleNewInterest}>
                            <option value="">Interesse</option>
                            <option value="Aluguel">Aluguel</option>
                            <option value="Compra">Compra</option>
                        </select>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Tipo</h5>
                    <select value={type} onChange={handleNewType}>
                    <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                        </select>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Subtipo</h5>
                    <select value={subtype} onChange={handleNewSubtype}>
                        {type === "Residencial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Casa geminada">Casa geminada</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Bangalô">Bangalô</option>
                        <option value="Edícula">Edícula</option>
                        <option value="Flat">Flat</option>
                        <option value="Casa de vila">Casa de vila</option>
                        <option value="Condomínio fechado">Condomínio fechado</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Apartamento duplex">Apartamento duplex</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Cobertura duplex">Cobertura duplex</option>
                        <option value="Loft">Loft</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Mansão">Mansão</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Comercial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Loja">Loja</option>
                        <option value="Conjunto comercial">Conjunto comercial</option>
                        <option value="Ponto comercial">Ponto comercial</option>
                        <option value="Sala Comercial">Sala Comercial</option>
                        <option value="Prédio">Prédio</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Industrial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Galpão">Galpão</option>
                        <option value="Área industrial">Área industrial</option>
                        </>
                        : type === "Rural" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Chácara">Chácara</option>
                        <option value="Fazenda">Fazenda</option>
                        <option value="Sítio">Sítio</option>
                        </>
                        : type === "Terrenos e Lotes" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Área">Área</option>
                        <option value="Terreno/Lote">Terreno/Lote</option>
                        </>
                        :  <option value="">Selecione o tipo</option>
                        }
                    </select>
                    </div>

                    <div className="dataInputUnic">
                    <h5>Cidade</h5>
                    <input type="text" value={cityPreference} onChange={e => setCityPreference(e.target.value)}/>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Estado</h5>
                    <input type="text" value={ufPreference} onChange={e => setUfPreference(e.target.value)}/>
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