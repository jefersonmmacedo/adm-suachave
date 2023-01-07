import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myClientsList.css";
import {IoFileTrayFullOutline, IoTrashOutline, IoCreateOutline, IoLocationOutline, IoEyeOutline, IoHeartOutline, IoLogoWhatsapp, IoCallOutline, IoMailOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";
import { DateFormat2 } from "../../components/DateFormat2/DateFormat2";
import { NewClient } from "../../components/NewClient/NewClient";
import { FilterDataClient } from "../../components/FilterDataClient/FilterDataClient";
import { NewEditClient } from "../../components/NewEditClient/NewEditClient";

export function MyClientsList() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);


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
                        <h5><IoHeartOutline /> {client.interest} - {client.type} - {client.subtype} </h5>
                        <h5><IoLocationOutline /> {client.cityPreference} - {client.ufPreference}</h5>
                            </div>
                            {/* <h5>{client.interest} - {client.type} - {client.subtype}</h5>
                            <h5>{client.cityPreference} - {client.ufPreference}</h5> */}
                        </div>
   
                        <div className="buttonsClients">
                        <NewEditClient />
    
                        <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                        <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                         <span>Deletar</span>
                        </ReactTooltip>
                        
                        <FilterDataClient name={client.fantasyName} address={`${client.road} - Nº${client.number} - ${client.district} -${client.city} -${client.uf}`} phone={client.phone} whatsapp={client.whatsapp} email={client.email} interess={`${client.interest} - ${client.type} - ${client.subtype} - ${client.cityPreference} - ${client.ufPreference}`}/>
   
                        </div>
                    </div>  
                    )
                })}


            </div>
            </div>
        </div>
    )
}