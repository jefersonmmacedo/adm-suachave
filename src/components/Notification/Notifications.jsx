import "./notification.css";
import { IoFolderOpenOutline } from "react-icons/io5";

export function Notification() {
    return (
        <div className="Notification">
            <div className="infos">
                <div className="text">
                <h5>Texto da notificação</h5>
                </div>
            </div>
            <IoFolderOpenOutline />
        </div>
    )
}