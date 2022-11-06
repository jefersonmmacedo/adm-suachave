import { BrokerList } from "../../components/BrokerList/BrokerList";
import NavbarAdm from "../../components/Nav/Navbar";
import { ToolBar } from "../../components/ToolBar/ToolBar";
import "./brokersAdm.css"

export function BrokersAdm() {
    return (
        <div className="BrokersAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Corretores</h3>
            <div className="informations">
                <BrokerList />
            </div>
            </div>
        </div>
    )
}