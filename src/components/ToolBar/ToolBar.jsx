import "./toolBar.css";
import LogoImg from '../../assets/images/imob2.png'
import {IoSpeedometerOutline, IoPersonOutline,  IoNotificationsOutline, IoLogOutOutline, IoChatboxEllipsesOutline,
    IoHomeOutline, IoLaptopOutline, IoCalendarOutline, IoLogoWhatsapp, IoQrCodeOutline, IoPeopleOutline, IoKeyOutline, IoRocketOutline,
    IoTimerOutlineOutline, IoTimerOutline, IoSearchOutline, IoFunnelOutline } from 'react-icons/io5';

import {TbCurrencyDollar } from 'react-icons/tb';
import {TbHeadset } from 'react-icons/tb';
import {AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
export function ToolBar() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);
    
  const [plain, setPlain] = useState();
  const [myPayment, setMyPayment] = useState();

    useEffect(() => {
        async function loadMyPlain() {
          await api.get(`/myplain/${user.id}`).then((res) => {
            loadPlains(res.data[0].idPlain)
          })
        }
    
        async function loadPlains(id) {
          await api.get(`/plains/plain/${id}`).then((res) => {
            setPlain(res.data[0])
          })
        }
        loadMyPlain()
      }, [])
      
    return (
        <div className="ToolBar">
            {/* <div className="image">
                <img src={user.logo} alt="" />
            </div> */}
            <div className="Tools">
                <div className="ToolUnic">
                   <a href="/home">
                    <IoSpeedometerOutline /><p>Painel</p>                    
                    </a>
                </div>
                {/* <div className="ToolUnic">
                   <a href="/chat">
                    <IoChatboxEllipsesOutline /><p>Chat</p>
                    </a>
                </div> */}
                <div className="ToolUnic3">
                   <a href="/imoveis">
                    <IoHomeOutline /><p>Imóveis</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/agendamentos">
                    <IoCalendarOutline /><p>Agenda</p>
                    </a>
                </div>
                {plain?.name === "Pro" ? "" :
                <div className="ToolUnic2">
                   <a href="/alugueis">
                    <IoKeyOutline /><p>Aluguéis</p>
                    </a>
                </div>
                }
                {plain?.name === "Pro" ? "" :
                <div className="ToolUnic2">
                   <a href="/vendas">
                    <IoRocketOutline /><p>Vendas</p>
                    </a>
                </div>
                }
                {plain?.name === "Pro" ? "" :
                <div className="ToolUnic2">
                   <a href="/avaliacoes">
                    <IoSearchOutline /><p>Avaliações</p>
                    </a>
                </div>
                }

                <div className="ToolUnic2">
                   <a href="/financeiro">
                   <TbCurrencyDollar /><p>Financeiro</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/clientes">
                   <AiOutlineUsergroupAdd /><p>Clientes</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/clientes">
                   <IoFunnelOutline /><p>Leads</p>
                    </a>
                </div>
                {plain?.name === "Pro" ? "" :
                <div className="ToolUnic2">
                   <a href="/corretores">
                    <IoPeopleOutline /><p>Corretores</p>
                    </a>
                </div>
                }
                <div className="ToolUnic2">
                   <a href="/planos">
                    <IoQrCodeOutline /><p>Meu plano</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/minhaconta">
                    <IoPersonOutline /><p>Conta</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/web">
                    <IoLaptopOutline /><p>Site/App</p>
                    </a>
                </div>
                {plain?.name === "Pro" ? "" :
                <div className="ToolUnic2">
                   <a href="/historico">
                   <IoTimerOutline /><p>Histórico</p>
                    </a>
                </div>
                }
                <div className="ToolUnic2">
                   <a href="/suporte">
                    <TbHeadset /><p>Call Center</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/">
                  
                    </a>
                </div>
            </div>
        </div>
    )
}