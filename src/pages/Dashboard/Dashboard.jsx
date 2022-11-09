import { DownloadApp } from "../../components/DownloadApp/DownloadApp"
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./dashboard.css";
import {IoHome, IoCalendar, IoLogoWhatsapp, IoCall,IoAlertCircle, IoHeart} from 'react-icons/io5'


export function Dashboard() {




    return (
        <div className="Dashboard">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h2>Olá, Sua Chave. Seja bem vindo!</h2>
            <div className="informations">
                <div className="infoData">
                    <div className="topInfo">
                        <IoHome />
                        <h3>150</h3>
                    </div>
                    <h5>Imóveis publicados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoHome />
                        <h3>20</h3>
                    </div>
                    <h5>Imóveis alugados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoHome />
                        <h3>30</h3>
                    </div>
                    <h5>Imóveis vendidos</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoHome />
                        <h3>15</h3>
                    </div>
                    <h5>Imóveis avaliados</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoCalendar />
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
                        <IoCall />
                        <h3>380</h3>
                    </div>
                    <h5>Contatos via ligação</h5>
                </div>
                <div className="infoData">
                <div className="topInfo">
                        <IoHeart />
                        <h3>180</h3>
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