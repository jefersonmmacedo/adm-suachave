import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myClientsList.css";
import {IoFileTrayFullOutline, IoTrashOutline, IoCreateOutline, IoLocationOutline, IoEyeOutline, IoHeartOutline, IoLogoWhatsapp, IoCallOutline, IoMailOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";
import { DateFormat2 } from "../../components/DateFormat2/DateFormat2";

export function MyClientsList() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const profile = "https://www.forestcom.com.br/wp-content/uploads/2018/09/blank-profile-picture-973460_640.png";

    const {data} = useFetch(`/property/company/${user.id}`);

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
                <h3>Meus clientes</h3>

                <a className="link" href="/novocliente">Novo cliente</a>

                <div className="search">
                    <input type="text" placeholder="Busque por: Título, código ou cidade" />
                    <div className="selection">
                    <select>
                        <option value="">Venda</option>
                        <option value="">Aluguel</option>
                    </select>
                    <select>
                        <option value="">Disponível</option>
                        <option value="">Indisponível</option>
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
                            <img src={profile} alt="" />
                            </a>
                        </div>
                        <div className="textclientListAdm">
                            <div className="textDataclientListAdm">
                        <h4>{client.title}</h4>
                        <h6><IoLocationOutline /> {client.road} - {client.district} - {client.city} -{client.uf} </h6>
                        <h6><IoCallOutline /> (21)971684632 <IoMailOutline /> jefersonmacedowgf@gmail.com</h6>
                        {/* <h6><DateFormat2 date={client.created_at} /></h6> */}
                            </div>
                            <h5>Compra</h5>
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
    
                        <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                        <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                         <span>Vendido/Alugado</span>
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