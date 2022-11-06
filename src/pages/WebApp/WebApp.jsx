import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./webApp.css";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function WebApp() {
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
        <div className="WebApp">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Meu site e aplicativo</h3>
            <div className="informations">
            <form action="">
                <label className="label-avatar">
                        <span><FiUpload color="#f65" size={25} /></span>
                        <input type="file" accept="image/*" onChange={handleFile} required/><br />
                        <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                    </label>

                    <div className="dataInputs">
                        <div className="textInputWeb">
                            <h5>Título</h5>
                        </div>           
                    <input type="text"  />
                    <div className="textInputWeb">
                            <h5>Descrição</h5>
                        </div> 
                    <input type="text"  />
                    <div className="textInputWeb">
                            <h5>Sobre nós</h5>
                        </div> 
                    <textarea name="" id="" cols="30" rows="10" ></textarea>
                    <div className="textInputWeb">
                            <h5>Serviços oferecidos</h5>
                        </div> 
                    <textarea name="" id="" cols="30" rows="10" ></textarea>
                    <div className="textInputWeb">
                            <h5>Missão</h5>
                        </div> 
                    <textarea name="" id="" cols="30" rows="10" ></textarea>
                    <div className="textInputWeb">
                            <h5>Visão</h5>
                        </div> 
                    <textarea name="" id="" cols="30" rows="10" ></textarea>
                    <div className="textInputWeb">
                            <h5>Valores</h5>
                        </div> 
                    <textarea name="" id="" cols="30" rows="10" ></textarea>
                    <br />
                    <br />
                    <div className="dataInputs">
                    <div className="textInputWeb">
                            <h5>Telefone</h5>
                        </div> 
                    <input type="text"  />
                    <div className="textInputWeb">
                            <h5>Whatsapp</h5>
                        </div> 
                    <input type="text"  />
                    <div className="textInputWeb">
                            <h5>E-mail</h5>
                        </div> 
                    <input type="text"  />
                    </div>
                    <div className="dataInputsWeb">
                    <div className="textInputWeb">
                            <h5>Facebook</h5>
                        </div> 
                        <div className="textInputWeb">
                            <h5>Instagram</h5>
                        </div> 
                    </div>
                    <div className="dataInputsWeb">
                    <input type="text" placeholder="http://facebook.com/usuario"/>
                    <input type="text" placeholder="http://instagram.com/usuario" />
                    </div>
                    <div className="dataInputsWeb">
                    <div className="textInputWeb">
                            <h5>Linkedin</h5>
                        </div> 
                        <div className="textInputWeb">
                            <h5>Youtube</h5>
                        </div> 
                    </div>
                    <div className="dataInputsWeb">
                    <input type="text" placeholder="http://linkedin.com/usuario" />
                    <input type="text" placeholder="http://youtube.com/usuario" />
                    </div>
                    <br />
                    <br />
                    <div className="dataInputsWeb">
                    <div className="textInputWeb">
                            <h5>Cor principal</h5>
                        </div> 
                        <div className="textInputWeb">
                            <h5>Cor secundária</h5>
                        </div> 
                        </div> 
                    <div className="dataInputsWeb">
                    <input type="text" placeholder="Ex.: 256,256,256 ou #FFFFFF" />

                    <input type="text" placeholder="Ex.: 256,256,256 ou #FFFFFF" />
                    </div>
                    </div>

                    <button>Atualizar Dados</button>

                </form>
            </div>
            </div>
        </div>
    )
}