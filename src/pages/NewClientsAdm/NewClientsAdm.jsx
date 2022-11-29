import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./newClientsAdm.css";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function NewClientsAdm() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const profile = "https://www.forestcom.com.br/wp-content/uploads/2018/09/blank-profile-picture-973460_640.png";

    const [client, setClient] = useState("pf");

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

    return (
        <div className="NewClientsAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Cadastro de novo cliente</h3>
            <div className="informations">
            <form action="">
                <label className="label-avatar">
                        <span><FiUpload color="#f65" size={25} /></span>
                        <input type="file" accept="image/*" onChange={handleFile} required/><br />
                        <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                    </label>

                    <div className="textDataInputs">
                    <h4>Cadastro</h4>
                    </div>             
                    <div className="dataInputs">  
                    {client === "pf" ?
                    <>
                    <input type="text" placeholder="Nome completo" />
                    <input type="text" placeholder="Nome de tratamento" />
                    <input type="text" placeholder="CPF" />
                    <input type="text" placeholder="RG" />
                    </>
                :
                <>
                <input type="text" placeholder="Razão Social" />
                <input type="text" placeholder="Nome Fantasia" />
                <input type="text" placeholder="CRECI" />
                </>}

                    </div>
                    <div className="textDataInputs">
                    <h4>Contato</h4>
                    </div>             
                    <div className="dataInputs">  
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Whatsapp" />
                    </div>

                    {client === "pf" ? "" :
                    <>
                    <div className="textDataInputs">
                    <h4>Responsável</h4>
                    </div>     
                    <div className="dataInputs"> 
                    <input type="text" placeholder="Nome Responsável" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Whatsapp" />
                    </div>
                    </>
                    }          

                    <div className="textDataInputs">
                    <h4>Endereço</h4>
                    </div>              
                    <div className="dataInputs">   
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Bairro" />
                    <select value="">
                        <option value="">Estado</option>
                    </select>
                    <select value="">
                        <option value="">Cidade</option>
                    </select>
                    </div>

                    <div className="textDataInputs">
                    <h4>Interesse</h4>
                    </div>
                    <div className="dataInputs">   
                    <select value="">
                        <option value="">Interesse</option>
                        <option value="">Aluguel</option>
                        <option value="">Venda</option>
                    </select>
                    <select value="">
                        <option value="">Tipo</option>
                        <option value="">Residencial</option>
                        <option value="">Comercial</option>
                        <option value="">Rural</option>
                    </select>
                    <select value="">
                        <option value="">Subtipo</option>
                        <option value="">Casa</option>
                        <option value="">Sala comercial</option>
                        <option value="">Fazenda</option>
                    </select>
                    </div>

                    <div className="textDataInputs">
                    <h4>Atendido por</h4>
                    </div>
                    <div className="dataInputs"> 
                    <input type="text" placeholder="Atendido por" />
                    </div>


                    <button>Criar cliente</button>
                   
                </form>
            </div>
            </div>
        </div>
    )
}