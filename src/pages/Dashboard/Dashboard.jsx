import { DownloadApp } from "../../components/DownloadApp/DownloadApp"
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./dashboard.css";
import {IoHomeOutline, IoCalendarOutline, IoLogoWhatsapp, IoCallOutline,IoAlertCircle,
    IoHeartOutline, IoKeyOutline, IoRocketOutline, IoSearchOutline} from 'react-icons/io5'
import { PropertiesCount } from "../../components/ItensDashboard/PropertiesCount";
import { PropertiesCountSale } from "../../components/ItensDashboard/PropertiesCountSale";
import { PropertiesCountRent } from "../../components/ItensDashboard/PropertiesCountRent";
import { EvaluationCount } from "../../components/ItensDashboard/EvaluationCount";
import { SchedulingCount } from "../../components/ItensDashboard/SchedulingCount";
import { ContactWhatsappCount } from "../../components/ItensDashboard/ContactWhatsappCount";
import { ContactPhoneCount } from "../../components/ItensDashboard/ContactPhoneCount";
import { FavoriteCount } from "../../components/ItensDashboard/FavoriteCount";


export function Dashboard() {

    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    
    return (
        <div className="Dashboard">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <div className="textHome">
                <h3>Olá, {user.fantasyName}. Seja bem vindo!</h3>
                {/* <h4>Sair</h4> */}
                </div>

            <div className="informations">
                <div className="infoData">
                    <div className="topInfo">
                        <IoHomeOutline />
                        <h3><PropertiesCount /></h3>
                    </div>
                    <h5>Imóveis publicados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoKeyOutline />
                        <h3><PropertiesCountRent /></h3>
                    </div>
                    <h5>Imóveis alugados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoRocketOutline />
                        <h3><PropertiesCountSale /></h3>
                    </div>
                    <h5>Imóveis vendidos</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoSearchOutline />
                        <h3><EvaluationCount /></h3>
                    </div>
                    <h5>Imóveis avaliados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoCalendarOutline />
                        <h3><SchedulingCount /></h3>
                    </div>
                    <h5>Agendamentos de hoje</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoLogoWhatsapp />
                        <h3><ContactWhatsappCount /></h3>
                    </div>
                    <h5>Contatos de Whatsapp</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoCallOutline />
                        <h3><ContactPhoneCount /></h3>
                    </div>
                    <h5>Contatos via ligação</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoHeartOutline />
                        <h3><FavoriteCount /></h3>
                    </div>
                    <h5>Salvos no favoritos</h5>
                </div>

            </div>
            <div className="PlainDashboard">
                <h4><IoAlertCircle />Seu plano vence em 5 dias.</h4>
                <a href="/planos">Renovar agora</a>
            </div>
            <DownloadApp />
            </div>
        </div>
    )
}