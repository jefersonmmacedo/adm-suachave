import "./editStatusProperty.css";

import { IoArrowDownCircleOutline, IoFileTrayFullOutline, IoArrowUpCircleOutline, IoCloseOutline, IoSyncOutline} from 'react-icons/io5';
import Modal from 'react-modal';
import { mask as masker, unMask } from "remask";
import { toNumber } from "vanilla-masker";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { MyButtonDocument } from "../UploadDocuments/UploadDocuments";
import { useState } from "react";
import ReactTooltip from 'react-tooltip';


export function EditStatusProperty() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {newFinancer} = useContext(AuthContext);

    const [isOpenModalSearch, setIsOpenModaSearch] = useState(false);
    const [typeButton, setTypeButton] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [valueFinance, setValueFinance] = useState("");


    function handleNewFincancer(e) {
        e.preventDefault();
        const idTransaction = ""
        console.log({idCompany: user.id, idTransaction: idTransaction, title, description, type: typeButton, valueFinance})
       newFinancer({idCompany: user.id, idTransaction: idTransaction, title, description, type: typeButton, valueFinance})
        console.log(toNumber(valueFinance))
    }

    function handleOpenModalSearch(e) {
        e.preventDefault();
          setIsOpenModaSearch(true)
        }
      
        function handleCloseModalSearch(e) {
          e.preventDefault();
          setIsOpenModaSearch(false);
        }
  
        function handleNewType(data) {
            setTypeButton(data)
        }

        function handleSelectTitle(e) {
            setTitle(e.target.value)
        }


      Modal.setAppElement('#root');
    return (
        <>
         <button className="notView" data-tip data-for='Vendido/Alugado' onClick={handleOpenModalSearch}><IoFileTrayFullOutline /></button>
                        <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                         <span>Vendido/Alugado</span>
                        </ReactTooltip>


         <Modal isOpen={isOpenModalSearch} onRequestClose={handleCloseModalSearch}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalSearch}>
            <IoCloseOutline color={"#fff"}/> 
            </button>
            <div className="content-modal-home-Search">
            <div className="itensModalHome-Search">
            <div className="form">
                    {/* <input type="text" placeholder="Título" /> */}
                    <div className="TypeButtons">
                        <button className={typeButton === "Vendido" ? "btnType3Select" : "btnType1Select"} onClick={() => handleNewType("Vendido")}><IoArrowUpCircleOutline />Vendido</button>
                        <button className={typeButton === "Alugado" ? "btnType4Select" : "btnType2Select"} onClick={() => handleNewType("Alugado")}><IoSyncOutline />Alugado</button>
                    </div>
                    <br />
                    <button className="send" onClick={handleNewFincancer}>Alterar status</button>
                    </div>
            </div>
            </div>
            </Modal>
        </>
    )
}