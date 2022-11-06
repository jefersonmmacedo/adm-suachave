import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import { Notification } from "../../components/Notification/Notifications";
import "./notificationsAdm.css"

export function NotificationsAdm() {
    return (
        <div className="NotificationsAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Notificações e Alertas</h3>
            <div className="informations">
                <Notification />
                <Notification />
                <Notification />
            </div>
            </div>
        </div>
    )
}