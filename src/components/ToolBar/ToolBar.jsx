import "./toolBar.css";
import LogoImg from '../../assets/images/imob2.png'
import {IoSpeedometer, IoPerson,  IoNotifications, IoLogOutOutline, IoChatboxEllipses,
    IoHome, IoLaptopOutline, IoCalendar, IoLogoWhatsapp, IoQrCode, IoPeople, IoKey, IoRocket, IoTimerOutline, IoTimer } from 'react-icons/io5';
import {FaLaptopHouse, FaHouseUser, FaDollarSign } from 'react-icons/fa';
export function ToolBar() {
    return (
        <div className="ToolBar">
            <div className="image">
                <img src={LogoImg} alt="" />
            </div>
            <div className="Tools">
                <div className="ToolUnic">
                   <a href="/home">
                    <IoSpeedometer /><p>Painel</p>                    
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/chat">
                    <IoChatboxEllipses /><p>Chat</p>
                    </a>
                </div>
                <div className="ToolUnic3">
                   <a href="/imoveis">
                    <IoHome /><p>Imóveis</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/agendamentos">
                    <IoCalendar /><p>Agenda</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/alugueis">
                    <IoKey /><p>Aluguéis</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/vendas">
                    <IoRocket /><p>Vendas</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/avaliacoes">
                    <FaHouseUser /><p>Avaliações</p>
                    </a>
                </div>

                <div className="ToolUnic2">
                   <a href="/financeiro">
                   <FaDollarSign /><p>Financeiro</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/planos">
                    <IoQrCode /><p>Meu plano</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/corretores">
                    <IoPeople /><p>Corretores</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/minhaconta">
                    <IoPerson /><p>Conta</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/web">
                    <IoLaptopOutline /><p>Site/App</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/historico">
                   <IoTimer /><p>Histórico</p>
                    </a>
                </div>
                   <button className="btnToolBar">Atendimento</button>
                {/* <button className="btnToolBar"><IoLogoWhatsapp />Financeiro</button>
                <button className="btnToolBar"><IoLogoWhatsapp />Comercial</button> */}
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}