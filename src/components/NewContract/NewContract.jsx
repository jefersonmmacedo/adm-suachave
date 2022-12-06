import "./newContract.css";

import { IoAttachOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { MyButtonDocument } from "../UploadDocuments/UploadDocuments";

export function NewContract({idProperty}) {
    const [isOpenModalProcess, setIsOpenModaProcess] = useState(false);
    console.log(idProperty);

    const {data} = useFetch(`/property/${idProperty}`)

    if(!data) {
        return (
            <h5>Carregando</h5>
        )
    }

    function handleOpenModalProcess(e) {
        e.preventDefault();
          setIsOpenModaProcess(true)
        }
      
        function handleCloseModalProcess(e) {
          e.preventDefault();
          setIsOpenModaProcess(false);
        }
        

        Modal.setAppElement('#root');
    return (
        <>
        <button className="New" onClick={handleOpenModalProcess} data-tip data-for='Novo Aluguel/Venda'><IoAttachOutline /></button>
            <ReactTooltip id='Novo Aluguel/Venda' place="bottom" type="dark" effect="solid">
            <span>Novo Aluguel/Venda</span>
            </ReactTooltip>


        <Modal isOpen={isOpenModalProcess} onRequestClose={handleCloseModalProcess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
        <div className="content-moda-Process">
        <div className="itensModal-Process">
            <h3>Nova contrato</h3>

            <div className="form">
                <div className="ButtonsForm">
               <MyButtonDocument />
                </div>
            </div>
        </div>
        </div>
        </Modal>
        </>
    )
}