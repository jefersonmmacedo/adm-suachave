import NavbarAdm from "../../components/Nav/Navbar";
import { ToolBar } from "../../components/ToolBar/ToolBar";
import {IoDesktopOutline, IoBrowsersOutline, IoPhonePortraitOutline} from "react-icons/io5"
import "./accessAdm.css"

export function AccessAdm() {
    return (
        <div className="AccessAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Histórico de acessos</h3>
            <div className="AccessList">

                <div className="AccessListUnic">
                    <h5><span><IoDesktopOutline /></span> Computador</h5>
                    <h5><span><IoBrowsersOutline /></span> Mozilla</h5>
                    <h5 className="date">15/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoPhonePortraitOutline /></span> SmartPhone</h5>
                    <h5><span><IoBrowsersOutline /></span> Mozilla</h5>
                    <h5 className="date">13/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoDesktopOutline /></span> Computador</h5>
                    <h5><span><IoBrowsersOutline /></span> Chrome</h5>
                    <h5 className="date">08/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoPhonePortraitOutline /></span> SmartPhone</h5>
                    <h5><span><IoBrowsersOutline /></span> Mozilla</h5>
                    <h5 className="date">05/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoPhonePortraitOutline /></span> SmartPhone</h5>
                    <h5><span><IoBrowsersOutline /></span> Chrome</h5>
                    <h5 className="date">15/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoDesktopOutline /></span> Computador</h5>
                    <h5><span><IoBrowsersOutline /></span> Chrome</h5>
                    <h5 className="date">13/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoDesktopOutline /></span> Computador</h5>
                    <h5><span><IoBrowsersOutline /></span> Edge</h5>
                    <h5 className="date">08/11/2022</h5>
                </div>
                <div className="AccessListUnic">
                    <h5><span><IoPhonePortraitOutline /></span> SmartPhone</h5>
                    <h5><span><IoBrowsersOutline /></span> Edge</h5>
                    <h5 className="date">05/11/2022</h5>
                </div>
            </div>
            </div>
        </div>
    )
}