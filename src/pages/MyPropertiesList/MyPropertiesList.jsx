import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./myPropertiesList.css";
import {IoTrashOutline, IoCreateOutline, IoLocationOutline, IoEyeOutline, IoHeartOutline, IoLogoWhatsapp, IoCallOutline, IoHomeOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { useFetch } from "../../hooks/useFetch";
import { DateFormat2 } from "../../components/DateFormat2/DateFormat2";
import { NewNegotiations } from "../../components/NewNegotiations/NewNegotiations";
import { EditStatusProperty } from "../../components/EditStatusProperty/EditStatusProperty";
import { CountersViews } from "../../components/CountersProperties/CountersViews";
import { CountersFavorites } from "../../components/CountersProperties/CountersFavorites";
import { CountersContact } from "../../components/CountersProperties/CountersContact";
import { CountersWhatsapp } from "../../components/CountersProperties/CountersWhatsapp";

export function MyPropertiesList() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {data} = useFetch(`/property/company/${user.id}`);

    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }

    return (
        <div className="MyPropertiesList">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <div className="textHome">
                <h3>Meus imóveis</h3>
                <a className="link" href="/novoimovel">+ Novo anúncio</a>
                </div>
                <div className="infoData">
                    <div className="textInfo">
                <h5><span>200</span> Total</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Disponíveis</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Vendidos</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Alugados</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Indisponíveis</h5>
                    </div>
                </div>
               

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
            <div className="informations">

                {data.map((property) => {
                    return (
                        <div className="propertyListAdm" key={property.id}>
                        <div className="image">
                            <a href="/conversa">
                            <img src={property.featuredImage} alt="" />
                            </a>
                        </div>
                        <div className="textpropertyListAdm">
                            <div className="textDatapropertyListAdm">
                        <h3>{property.title}</h3>
                        <h5><IoHomeOutline />{property.type} - {property.subType} - {property.status}</h5>
                        <h5><IoLocationOutline />{property.road} - {property.district} - {property.city} -{property.uf}</h5>
                        <h6><DateFormat2 date={property.created_at} /></h6>
                            </div>
                            <h4>{property.availability}</h4>
                        <div className="infosContactData">
                            <div className="infoUnicData">
                            <IoEyeOutline />
                                <h5> <CountersViews id={property.id}/> Visualizações</h5>
                            </div>
                            <div className="infoUnicData">
                            <IoHeartOutline />
                                <h5> <CountersFavorites id={property.id}/> Salvos</h5>
                            </div>
                            <div className="infoUnicData">
                            <IoLogoWhatsapp />
                                <h5> <CountersWhatsapp id={property.id}/> Whatsapp</h5>
                            </div>
                            <div className="infoUnicData">
                            <IoCallOutline />
                                <h5><CountersContact id={property.id}/> Ligações</h5>
                            </div>
                        </div>
                        </div>
    
   
                        <div className="buttons">
                        <a href={`/editarimovel/${property.id}`} className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                        <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                         <span>Editar</span>
                        </ReactTooltip>
    
                        <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                        <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                         <span>Deletar</span>
                        </ReactTooltip>
                        
                        <EditStatusProperty />

                        <NewNegotiations idProperty={property.id}/>
    
                        </div>
                    </div>  
                    )
                })}


            </div>
            </div>



        </div>
    )
}