import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myAccountAdm.css";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function MyAccountAdm() {
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
                    <input type="text" placeholder="CNPJ" />
                    <input type="text" placeholder="Razão Social" />
                    <input type="text" placeholder="Nome Fantasia" />
                    <input type="text" placeholder="CRECI" />
                    </div>
                    <div className="textDataInputs">
                    <h4>Contato</h4>
                    </div>             
                    <div className="dataInputs">  
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Whatsapp" />
                    <input type="text" placeholder="Facebook" />
                    <input type="text" placeholder="Instagram" />
                    <input type="text" placeholder="Linkedin" />
                    <input type="text" placeholder="Youtube" />
                    </div>

                    <div className="textDataInputs">
                    <h4>Responsável</h4>
                    </div>               
                    <div className="dataInputs"> 
                    <input type="text" placeholder="Nome Responsável" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Whatsapp" />
                    </div>

                    <div className="textDataInputs">
                    <h4>Endereço</h4>
                    </div>              
                    <div className="dataInputs">   
                    <input type="text" placeholder="CEP" />
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="UF" />
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