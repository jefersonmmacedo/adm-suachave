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
            <div className="textHome">
                <h3>Corretores</h3>
                <a className="link" href="/novoimovel">+ Novo corretor</a>
                </div>
            <div className="informations">
                <BrokerList />
            </div>
            </div>
        </div>
    )
}