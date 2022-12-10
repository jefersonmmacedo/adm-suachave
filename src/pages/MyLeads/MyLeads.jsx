import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myLeads.css";
import {IoFileTrayFullOutline, IoTrashOutline, IoCreateOutline, IoLocationOutline, IoEyeOutline, IoHeartOutline, IoLogoWhatsapp, IoCallOutline, IoMailOutline, IoHomeOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";
import { DateFormat2 } from "../../components/DateFormat2/DateFormat2";
import { NewClient } from "../../components/NewClient/NewClient";

export function MyLeads() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const profile = "https://www.forestcom.com.br/wp-content/uploads/2018/09/blank-profile-picture-973460_640.png";

    const {data} = useFetch(`/contact/company/${user.id}`);

    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }

    return (
        <div className="MyLeads">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
            <div className="textHome">
                <h3>Meus Leads</h3>
                {/* <NewClient /> */}
                </div>

               

                <div className="search">
                    <input type="text" placeholder="Busque por: Nome Cliente, email ou Id do imóvel" />
                    <div className="selection">
                    <select>
                        <option value="">Tipo de contato</option>
                        <option value="">Whatsapp</option>
                        <option value="">Ligação</option>
                    </select>
                    <select>
                        <option value="">Tipo de cliente</option>
                        <option value="">Com conta</option>
                        <option value="">Cliente sem conta</option>
                    </select>
                    </div>
                </div>
            <div className="informationsClients">

                {data.map((client) => {
                    return (
                        <div className="clientListAdm" key={client.id}>
                        <div className="image">
                            <a href="/conversa">
                            <img src={client.avatar !== "" ? client.avatar : profile} alt="" />
                            </a>
                        </div>
                        <div className="textclientListAdm">
                            <div className="textDataclientListAdm">
                        <h4>{client.name} - {client.idClient}</h4>
                        <a href={`https://www.suachave.com.br/imovel/${client.idProperty}`} target="_blank" rel="noreferrer">
                        <h5><IoHomeOutline /> {client.idProperty} </h5>
                        </a>
                        <div className="contactText">
                        <h5><IoCallOutline /> {client.phone}</h5><h5> <IoLogoWhatsapp/> {client.whatsapp}</h5><h5> <IoMailOutline /> {client.email}</h5>
                        </div>
                        {/* <h6><DateFormat2 date={client.created_at} /></h6> */}
                            </div>
                            <h6>{client.type}</h6>
                        </div>
    
   
                        {/* <div className="buttonsClients">
                        <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                        <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                         <span>Editar</span>
                        </ReactTooltip>
    
                        <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                        <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                         <span>Deletar</span>
                        </ReactTooltip>
    
                        <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                        <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                         <span>Vendido/Alugado</span>
                        </ReactTooltip>
    
                        </div> */}
                    </div>  
                    )
                })}


            </div>
            </div>
        </div>
    )
}