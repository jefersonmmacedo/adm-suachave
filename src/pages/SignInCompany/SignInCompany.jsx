import "./signInCompany.css";
import Logo from "../../assets/images/Logo2.png";

export function SignInCompany() {
    return (
        <div className="SignInCompany">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                        <input type="text" placeholder="Email ou ID"/>
                        <input type="password" placeholder="Senha"/>
                        <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button>Entrar</button>
                        <a href="/cadastrar">Cadastre-se aqui!</a>

                    </div>
                </form>

            </div>
        </div>
    )
}