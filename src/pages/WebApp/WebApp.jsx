import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./webApp.css";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function WebApp() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

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
            <div className="textHome">
            <h3>Site e Aplicativo</h3>
                {/* <a className="link" href="/novoimovel">Novo corretor</a> */}
                </div>

          
                <label className="label-avatar">
                        <span><FiUpload color="#f65" size={25} /></span>
                        <input type="file" accept="image/*" onChange={handleFile} required/><br />
                        <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                    </label>
                <div className="textHome">
                <h4>Dados do site</h4>
                </div>            
            <div className="form">

                    <div className="data">  
                    <input type="text" placeholder="Título"/>
                    <input type="text" placeholder="Descrição" />
                    <input type="text" placeholder="Ex.: 256,256,256 ou #FFFFFF" />
                    <input type="text" placeholder="Ex.: 256,256,256 ou #FFFFFF" />
                    </div>
                    </div>

                    
                <div className="textHome">
                <h4>Nossa história</h4>
                </div>            
            <div className="form">
                    <div className="data">  
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite"></textarea>
                    </div>
                    </div>


                <div className="textHome">
                <h4>Serviços oferecidos</h4>
                </div>            
            <div className="form">
                    <div className="data">  
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite"></textarea>
                    </div>
                    </div>


                <div className="textHome">
                <h4>Missão</h4>
                </div>            
            <div className="form">
                    <div className="data">  
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite"></textarea>
                    </div>
                    </div>


                <div className="textHome">
                <h4>Visão</h4>
                </div>            
            <div className="form">
                    <div className="data">  
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite"></textarea>
                    </div>
                    </div>


                <div className="textHome">
                <h4>Valores</h4>
                </div>            
            <div className="form">
                    <div className="data">  
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite"></textarea>
                    </div>
                    </div>

                <div className="textHome">
                <h4>Avaliação de imóveis</h4>
                </div>            
            <div className="form">
                    <div className="data">  
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite"></textarea>
                    </div>
                    </div>


                    <div className="textHome">
                       <h4>Contato</h4>
                    </div>              
                    <div className="form">
                    <div className="data">  
                    <input type="email" placeholder="E-mail"  />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Whatsapp" />
                   
                    </div>
                    </div>     
                    <div className="textHome">
                       <h4>Redes Sociais</h4>
                    </div>              
                    <div className="form">
                    <div className="data">  
                    <input type="text" placeholder="Facebook" />
                    <input type="text" placeholder="Instagram" />
                    <input type="text" placeholder="Linkedin" />
                    <input type="text" placeholder="Youtube" />
                    </div>
                    </div>  

                    <div className="textHome">
                    <h4>Endereço</h4>
                    </div>              
                    <div className="form"> 
                    <div className="data">   
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Bairro" />
                    <select value={user.uf}>
                        <option value="">{user.uf}</option>
                    </select>
                    <select value={user.city}>
                        <option value="">{user.city}</option>
                    </select>
                    </div>
                    </div>              

      
            </div>
            </div>

    )
}