import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myAppointments.css";
import profile from "../../assets/images/profile.png";
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import ImageHouse3 from "../../assets/images/house3.jpg";
import {IoCheckboxOutline, IoCalendarOutline, IoCloseOutline, IoCreateOutline, IoLocationOutline, IoPersonOutline, IoCarOutline, IoHomeOutline, IoCallOutline, IoEyeOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";
import { SchedulingEdit } from "../../components/SchedulingEdit/SchedulingEdit";

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
            <div className="textHome">
            <h3>Meus Agendamentos</h3>
                {/* <a className="link" href="/novoimovel">+ Nova venda</a> */}
                </div>
               

                {/* <div className="infoData">
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
                </div> */}

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
                            <a  href={`/agendamento/${scheduling.id}`} >
                            <img src={scheduling.imageProperty} alt="" />
                            </a>
                        </div>
                        <div className="textpropertyListAdm">
                            <div className="textDatapropertyListAdm">
                            <a  href={`/agendamento/${scheduling.id}`} >
                        <h3>{scheduling.titleProperty}</h3>
                            </a>
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
                        <SchedulingEdit id={`/agendamento/${scheduling.id}`}/>

                        <button className="delete" data-tip data-for='Cancelar'><IoCloseOutline /></button>
                        <ReactTooltip id='Cancelar' place="bottom" type="dark" effect="solid">
                         <span>Cancelar</span>
                        </ReactTooltip>

                        <button className="notView" data-tip data-for='Aprovar'><IoCheckboxOutline /></button>
                        <ReactTooltip id='Aprovar' place="bottom" type="dark" effect="solid">
                         <span>Aprovar</span>
                        </ReactTooltip>

                        {/* <a className="New" href={`/agendamento/${scheduling.id}`} data-tip data-for='Ver agendamento'><IoEyeOutline /></a>
                        <ReactTooltip id='Ver agendamento' place="bottom" type="dark" effect="solid">
                         <span>Ver agendamento</span>
                        </ReactTooltip> */}
    
                        </div>
                    </div>
                    )
                })}

            </div>
            </div>
        </div>
    )
}