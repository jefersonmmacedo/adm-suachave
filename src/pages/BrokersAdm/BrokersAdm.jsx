import { BrokerList } from "../../components/BrokerList/BrokerList";
import NavbarAdm from "../../components/Nav/Navbar";
import { NewCollaborator } from "../../components/NewCollaborator/NewCollaborator";
import { ToolBar } from "../../components/ToolBar/ToolBar";
import "./brokersAdm.css"

export function BrokersAdm() {
    return (
        <div className="BrokersAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
            <div className="textHome">
                <h3>Corretores</h3>
                <NewCollaborator />
                </div>
                <div className="search">
                    <input type="text" placeholder="Busque por: Título, código ou cidade" />
                    <div className="selection">
                    <select>
                        <option value="">Função</option>
                        <option value="">Aluguel</option>
                    </select>
                    <select>
                        <option value="">Contrato</option>
                        <option value="">Indisponível</option>
                    </select>
                    <select>
                        <option value="">Sexo</option>
                        <option value="">Residencial</option>
                        <option value="">Comercial</option>
                    </select>
                    </div>
                </div>
            <div className="informations">
                <BrokerList />
            </div>
            </div>
        </div>
    )
}