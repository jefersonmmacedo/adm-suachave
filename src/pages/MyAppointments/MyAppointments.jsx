import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myAppointments.css";
import profile from "../../assets/images/profile.png";
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import ImageHouse3 from "../../assets/images/house3.jpg";
import {IoCheckboxOutline, IoCalendarOutline, IoCloseOutline, IoCreateOutline, IoLocationOutline, IoPersonOutline, IoCarOutline, IoHomeOutline, IoCallOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";

export function MyAppointments() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {data} = useFetch(`/scheduling/company/${user.id}`);

    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }
    return (
        <div className="MyAppointments">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Meus Agendamentos</h3>

                <div className="infoData">
                    <div className="textInfo">
                <h5>Total: <span>200</span></h5>
                    </div>
                    <div className="textInfo">
                <h5>Aprovados: <span>200</span></h5>
                    </div>
                    <div className="textInfo">
                <h5>Pendentes: <span>200</span></h5>
                    </div>
                    <div className="textInfo">
                <h5>Recusados: <span>200</span></h5>
                    </div>
                </div>

                <div className="search">
                    <input type="text" placeholder="Busque por: Título, código ou cliente" />
                    <div className="selection">
                    <select>
                        <option value="">Aprovado</option>
                        <option value="">Pendente</option>
                        <option value="">Cancelado</option>
                    </select>
                    <select>
                        <option value="">Todos</option>
                        <option value="">Hoje</option>
                        <option value="">Próximos</option>
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
            <div className="informations">
                {data?.map((scheduling) => {
                    return (
                        <div className="propertyListAdm">
                        <div className="image">
                            <a href="/conversa">
                            <img src={scheduling.imageProperty} alt="" />
                            </a>
                        </div>
                        <div className="textpropertyListAdm">
                            <div className="textDatapropertyListAdm">
                        <h3>{scheduling.titleProperty}</h3>
                        <h5><IoCalendarOutline /> {scheduling.day} /{scheduling.month}/{scheduling.year}  {scheduling.hour}  | {scheduling.shift} </h5>
                            </div>
                            <div className="user">
                                {/* <div className="ImgUser">
                                    <img src={profile} alt="" />
                                </div>
                                <h4 className="name">João Felix Silva</h4> */}
                            <h4>{scheduling.status}</h4>
                            </div>
                        <div className="infosContactData">
                            <div className="infoUnicData">
                            <IoPersonOutline />
                                <h5> 5 Pessoas</h5>
                            </div>
                            <div className="infoUnicData">
                            <IoCarOutline />
                                <h5> Possui carro? Sim</h5>
                            </div>
                            <div className="infoUnicData">
                            <IoHomeOutline />
                                <h5> Deseja ver outros imóveis? Sim</h5>
                            </div>
                        </div>
                        </div>
    
    
    
    
                        <div className="buttons">
                        <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                        <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                         <span>Editar</span>
                        </ReactTooltip>
    
                        <button className="delete" data-tip data-for='Cancelar'><IoCloseOutline /></button>
                        <ReactTooltip id='Cancelar' place="bottom" type="dark" effect="solid">
                         <span>Cancelar</span>
                        </ReactTooltip>
    
                        <button className="notView" data-tip data-for='Aprovar'><IoCheckboxOutline /></button>
                        <ReactTooltip id='Aprovar' place="bottom" type="dark" effect="solid">
                         <span>Aprovar</span>
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