import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myAccountAdm.css";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function MyAccountAdm() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const profile = user.logo

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
        <div className="MyAccountAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Minha conta</h3>
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
                    <input type="text" placeholder="CNPJ" value={user.cnpj}/>
                    <input type="text" placeholder="Razão Social" value={user.socialReason}/>
                    <input type="text" placeholder="Nome Fantasia" value={user.fantasyName}/>
                    <input type="text" placeholder="CRECI" value={user.creci}/>
                    </div>
                    <div className="textDataInputs">
                    <h4>Contato</h4>
                    </div>             
                    <div className="dataInputs">  
                    <input type="email" placeholder="E-mail" value={user.email} />
                    <input type="text" placeholder="Telefone" value={user.phone} />
                    <input type="text" placeholder="Whatsapp" value={user.whatsapp} />
                    <input type="text" placeholder="Facebook" value={user.facebook} />
                    <input type="text" placeholder="Instagram" value={user.instagram} />
                    <input type="text" placeholder="Linkedin" value={user.linkedin} />
                    <input type="text" placeholder="Youtube" value={user.youtube} />
                    </div>

                    <div className="textDataInputs">
                    <h4>Responsável</h4>
                    </div>               
                    <div className="dataInputs"> 
                    <input type="text" placeholder="Nome Responsável" value={user.responsibleName} />
                    <input type="email" placeholder="E-mail" value={user.emailResponsible} />
                    <input type="text" placeholder="Whatsapp" value={user.whatsappResponsible} />
                    </div>

                    <div className="textDataInputs">
                    <h4>Endereço</h4>
                    </div>              
                    <div className="dataInputs">   
                    <input type="text" placeholder="Rua" value={user.road} />
                    <input type="text" placeholder="Número" value={user.number} />
                    <input type="text" placeholder="Bairro" value={user.district} />
                    <select value={user.uf}>
                        <option value="">{user.uf}</option>
                    </select>
                    <select value={user.city}>
                        <option value="">{user.city}</option>
                    </select>
                    </div>

                    <button>Atualizar Dados</button>
                    <div className="textDataInputs">
                    <h4>Alterar Senha</h4>
                    </div>
                    <div className="dataInputs">               
                    <input type="password" placeholder="Senha Atual" />
                    <input type="password" placeholder="Nova senha" />
                    <input type="password" placeholder="Confirmar nova senha" />
                    </div>

                    <button>Atualizar Senha</button>
                </form>
            </div>
            </div>
        </div>
    )
}