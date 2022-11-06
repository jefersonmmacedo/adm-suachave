import "./chatAdm.css";
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import { MessagesBudget2 } from "../../components/MessagesBudget2/MessagesBudget2";
import NavbarAdm from "../../components/Nav/Navbar";

export function ChatAdm() {
    return (
        <div className="ChatAdm">
            <NavbarAdm />
            <MessagesBudget2 />
        </div>
    )
}