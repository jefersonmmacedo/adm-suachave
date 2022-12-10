﻿import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myClientsList.css";
import {IoFileTrayFullOutline, IoTrashOutline, IoCreateOutline, IoLocationOutline, IoEyeOutline, IoHeartOutline, IoLogoWhatsapp, IoCallOutline, IoMailOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";
import { DateFormat2 } from "../../components/DateFormat2/DateFormat2";
import { NewClient } from "../../components/NewClient/NewClient";

export function MyClientsList() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const profile = "https://www.forestcom.com.br/wp-content/uploads/2018/09/blank-profile-picture-973460_640.png";

    const {data} = useFetch(`/clientCompany/company/${user.id}`);

    if(data) {
        console.log(data)
    }
    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }

    return (
        <div className="MyClientsList">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
            <div className="textHome">
                <h3>Meus clientes</h3>
                <NewClient />
                </div>            

                <div className="search">
                    <input type="text" placeholder="Busque por: Nome, nome fantasia ou razão social" />
                    <div className="selection">
                    <select>
                        <option value="">Interesse</option>
                        <option value="">Venda</option>
                        <option value="">Aluguel</option>
                    </select>
                    <select>
                        <option value="">Tipo</option>
                        <option value="">Residencial</option>
                        <option value="">Comercial</option>
                    </select>
                    <select>
                        <option value="">Subtipo</option>
                        <option value="">Casa</option>
                        <option value="">Apartamento</option>
                    </select>
                    </div>
                </div>


            <div className="informationsClients">

                {data.map((client) => {
                    return (
                        <div className="clientListAdm" key={client.id}>
                        <div className="image">
                            <a href="/conversa">
                            <img src={client.avatar} alt="" />
                            </a>
                        </div>
                        <div className="textclientListAdm">
                            <div className="textDataclientListAdm">
                        <h4>{client.fantasyName}</h4>
                        <h6><IoLocationOutline /> {client.road} - Nº{client.number} - {client.district} -{client.city} -{client.uf} </h6>
                        <h6><IoCallOutline /> {client.phone} <IoCallOutline /> {client.whatsapp} <IoMailOutline /> jefersonmacedowgf@gmail.com</h6>
                            </div>
                            <h5>{client.interest} - {client.type} - {client.subtype} - {client.cityPreference} - {client.ufPreference}</h5>
                        </div>
   
                        <div className="buttonsClients">
                        <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                        <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                         <span>Editar</span>
                        </ReactTooltip>
    
                        <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                        <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                         <span>Deletar</span>
                        </ReactTooltip>
    
                        <button className="notView" data-tip data-for='Ver Cliente'><IoFileTrayFullOutline /></button>
                        <ReactTooltip id='Ver Cliente' place="bottom" type="dark" effect="solid">
                         <span>Ver Cliente</span>
                        </ReactTooltip>
    
                        </div>
                    </div>  
                    )
                })}


            </div>
            </div>
        </div>
    )
}