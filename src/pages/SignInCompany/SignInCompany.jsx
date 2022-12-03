import "./signInCompany.css";
import Logo from "../../assets/images/Logo2.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/Auth";
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5';

export function SignInCompany() {
    const navigate = useNavigate();

    const [passwordView, setPasswordView] = useState(false)

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const {loginSessionCompany} = useContext(AuthContext);

    useEffect(() => {
        if(localStorage.getItem("suachave") !== null) {
          navigate("/home")
        }
      },[navigate]);

      function handleLogin() {
        loginSessionCompany({login, password})
        console.log({login, password})
      }

      
      function handlePasswordView() {
        if(passwordView === false) {
          setPasswordView(true)
        } else {
          setPasswordView(false)
        }
      }
      
    return (
        <div className="SignInCompany">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <div className="form">
               
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                        <input type="text" placeholder="Email ou ID" value={login} onChange={e => setLogin(e.target.value)}/>
                        <div className="dataInputs">
                        <input type={passwordView === false ? "password" : "text"}  placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="icon" onClick={handlePasswordView}>{passwordView === false ? <IoEyeOutline /> : <IoEyeOffOutline /> }
                        </div>
                        </div>
                        <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button onClick={handleLogin}>Entrar</button>
                        <a href="https://www.suachave.com.br/sobre" target="_blank" rel="noreferrer">Cadastre-se aqui!</a>

                    </div>
                    </div>

            </div>
        </div>
    )
}