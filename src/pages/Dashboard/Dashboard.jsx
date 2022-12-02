import { DownloadApp } from "../../components/DownloadApp/DownloadApp"
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./dashboard.css";
import {IoHomeOutline, IoCalendarOutline, IoLogoWhatsapp, IoCallOutline,IoAlertCircle,
    IoHeartOutline, IoKeyOutline, IoRocketOutline, IoSearchOutline} from 'react-icons/io5'


export function Dashboard() {

    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    
    return (
        <div className="Dashboard">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <div className="textDashboard">
                <h4>Olá, {user.fantasyName}. Seja bem vindo!</h4>
                {/* <h4>Sair</h4> */}
                </div>
            <div className="informations">
                <div className="infoData">
                    <div className="topInfo">
                        <IoHomeOutline />
                        <h3>150</h3>
                    </div>
                    <h5>Imóveis publicados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoKeyOutline />
                        <h3>20</h3>
                    </div>
                    <h5>Imóveis alugados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoRocketOutline />
                        <h3>30</h3>
                    </div>
                    <h5>Imóveis vendidos</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoSearchOutline />
                        <h3>15</h3>
                    </div>
                    <h5>Imóveis avaliados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoCalendarOutline />
                        <h3>10</h3>
                    </div>
                    <h5>Agendamentos de hoje</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoLogoWhatsapp />
                        <h3>510</h3>
                    </div>
                    <h5>Contatos de Whatsapp</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoCallOutline />
                        <h3>380</h3>
                    </div>
                    <h5>Contatos via ligação</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoHeartOutline />
                        <h3>180</h3>
                    </div>
                    <h5>Salvos no favoritos</h5>
                </div>

            </div>
            {/* <div className="PlainDashboard">
                <h4><IoAlertCircle />Seu plano vence em 5 dias.</h4>
                <a href="/planos">Renovar agora</a>
            </div> */}
            <DownloadApp />
            </div>
        </div>
    )
}