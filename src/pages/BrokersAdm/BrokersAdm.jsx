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
                <h3>Colaboradores</h3>
                <NewCollaborator />
                </div>
                <div className="search">
                    <input type="text" placeholder="Busque por: Título, código ou cidade" />
                    <div className="selection">
                    <select>
                        <option value="">Função</option>
                        <option value="Advogado(a)">Advogado(a)</option>
                            <option value="Corretor(a)">Corretor(a)</option>
                            <option value="Atendente">Atendente</option>
                            <option value="Secretária(o)">Secretária(o)</option>
                            <option value="Vendedor(a)">Vendedor(a)</option>
                            <option value="Designer">Designer</option>
                            <option value="Programador(a)">Programador(a)</option>
                            <option value="Diretor(a)">Diretor(a)</option>
                            <option value="Gerente">Gerente</option>
                            <option value="Supervisor(a)">Supervisor(a)</option>
                            <option value="CEO">CEO</option>
                    </select>
                    <select>
                        <option value="">Contrato</option>
                        <option value="">Em vigor</option>
                        <option value="">Pausado</option>
                        <option value="">Cancelado</option>
                    </select>
                    <select>
                        <option value="">Sexo</option>
                        <option value="">Masculino</option>
                        <option value="">Feminino</option>
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