
import "./chatAdmList.css";
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import Profile from "../../assets/images/profile.png";
import Profile1 from "../../assets/images/corretor1.jpg";
import Profile2 from "../../assets/images/corretor2.jpg";
import Profile3 from "../../assets/images/corretor3.jpg";
import { ChatUnicMessage } from "../../components/Message/ChatUnicMessage";
import { MessagesBudget } from "../../components/MessagesBudget/MessagesBudget";
import NavbarAdm from "../../components/Nav/Navbar";
import { ToolBar } from "../../components/ToolBar/ToolBar";

export function ChatAdmList() {
    return (
        <div className="ChatAdmList">
            <NavbarAdm />
            {/* <ToolBar /> */}
            <div className="aside">
            <div className="informations">
            <div className="ListConversations">
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse1} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile2} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse2} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile3} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse1} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile2} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse2} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile3} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse1} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile2} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse2} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile3} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse1} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile2} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse2} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile3} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile1} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse1} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile2} alt="" />
                        </div>
                    </div>
                    <div className="UserConversarion">
                        <div className="ImageProperty">
                            <img src={ImageHouse2} alt="" />
                        </div>
                        <div className="ImageClient">
                            <img src={Profile3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="ListChatMobile">
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
            <div className="chat">
                    <div className="image">
                        <a href="/painel/chat-client">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textChat">
                    <h3>Fulano de tal</h3>
                    <h5>Olá, boa noite. Este imóvel aceita financiamento...</h5>
                    <h6>Ultima mensagem às 16:45h</h6>
                    </div>
                </div>
                </div>







                <div className="messagesChat">
                <MessagesBudget />
                </div>
            </div>
            </div>
        </div>
    )
}