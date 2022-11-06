import { IoAlarmOutline, IoCalendarClear, IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import ImageHouse from "../../assets/images/house.jpg";
import "./schedulingAdm.css"

export function SchedulingAdm() {
    return (
        <div className="SchedulingAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Agendamentos</h3>
            <div className="informations">
            <div className="SchedulingProperty">
                    <h2><IoCalendarOutline />Imobiliária LXZ</h2>
                    <div className="textDataHours">
                    <h5><IoCalendarOutline /> Data: 25 de Novembro</h5>
                    <h5><IoAlarmOutline />Horário: 16:45h</h5>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    </div>
                    <div className="dataInfos">
                        <div className="infoUnicScheduling">
                            <p>Quantidade de pessoas: 5</p>
                        </div>
                        <div className="infoUnicScheduling">
                            <p>Possui carro? Não</p>
                        </div>
                        <div className="infoUnicScheduling">
                            <p>Deseja ver outros imóveis? Sim</p>
                        </div>
                    </div>
                    <h4>Imóveis para visita:</h4>
                    <div className="listPropertiesScheduling">
                    <div className="property">
                    <div className="image">
                       <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                    </div>
                    <div className="property">
                    <div className="image">
                       <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                    </div>
                    <div className="property">
                    <div className="image">
                       <img src={ImageHouse} alt="" />
                    </div>
                    <div className="textProperty">
                    <h3>Apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                    </div>
                    </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}