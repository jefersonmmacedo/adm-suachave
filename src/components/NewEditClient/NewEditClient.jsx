import "./newEditClient.css";
import Modal from 'react-modal';
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

export function NewEditClient() {
    const [isOpenModalProcess, setIsOpenModaProcess] = useState(false);
    const [typeClient, setTypeClient] = useState("Pessoa Fícica");

    function handleOpenModalProcess(e) {
        e.preventDefault();
          setIsOpenModaProcess(true)
        }
      
        function handleCloseModalProcess(e) {
          e.preventDefault();
          setIsOpenModaProcess(false);
        }

        function handleNewTypeClient(e) {
            setTypeClient(e.target.value)
        }
        

        Modal.setAppElement('#root');
    return (
        <>
         <button className="linkEdit" onClick={handleOpenModalProcess}><IoCreateOutline /></button>


        <Modal isOpen={isOpenModalProcess} onRequestClose={handleCloseModalProcess}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
        {/* <button type="button" className="react-modal-button" onClick={handleCloseModalProcess}>
        <IoCloseOutline color={"#fff"}/> 
        </button> */}



        <div className="content-moda-Process">
        <div className="itensModal-Process">
            <h3>Novo cliente</h3>

            <div className="form">
                <div className="DataInputs">
                <div className="dataInputUnic">
                    <h5>Tipo de cliente</h5>
                        <select value={typeClient} onChange={handleNewTypeClient}>
                            <option value="Pessoa Física">Pessoa Física</option>
                            <option value="Pessoa Júridica">Pessoa Júridica</option>
                        </select>
                    </div>
                    <div className="dataInputUnic">
                        {
                        typeClient === "Pessoa Física" ? 
                        <h5>Nome completo</h5>
                            :
                            <h5>Razão Social</h5>
                        }
                    
                    <input type="text" placeholder="Nome"/>
                       
                    </div>
                    <div className="dataInputUnic">
                    {
                        typeClient === "Pessoa Física" ? 
                        <h5>Nome de tratamento</h5>
                            :
                            <h5>Nome Fantasia</h5>
                        }
                    
                    <input type="text" placeholder="Nome"/>
                    </div>

                    <div className="dataInputUnic">
                    {
                        typeClient === "Pessoa Física" ? 
                        <h5>RG</h5>
                            :
                            <h5>Ins. Estadual (Opcional)</h5>
                        }   
                   
                    <input type="text" placeholder="Nome"/>
                       
                    </div>
                    <div className="dataInputUnic">
                    {
                        typeClient === "Pessoa Física" ? 
                        <h5>CPF</h5>
                            :
                            <h5>CNPJ</h5>
                        }  
                    
                    <input type="text" placeholder="Nome"/>
                    </div>
                </div>
                <div className="DataInputs">
                    <div className="dataInputUnic">
                    <h5>E-mail</h5>
                    <input type="text" placeholder="Digite o prazo em números" />
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Telefone</h5>
                    <input type="text" placeholder="Digite o prazo em números" />
                    </div>
                    <div className="dataInputUnic">
                    <h5>Whatsapp</h5>
                        <input type="text" placeholder="Digite o número de parcelas" />
                    </div>
                </div>
                <div className="DataInputs">
                    <div className="dataInputUnic">
                    <h5>Rua</h5>
                    <input type="text" placeholder="Nome"/>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Número</h5>
                    <input type="text" placeholder="Nome"/>
                    </div>

                    <div className="dataInputUnic">
                    <h5>Bairro</h5>
                    <input type="text" placeholder="Digite o prazo em números" />
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Cidade</h5>
                    <select >
                            <option value="">Cidade</option>
                            <option value="">Rio Bonito</option>
                        </select>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Estado</h5>
                    <select >
                            <option value="">Estado</option>
                            <option value="">Rio de Jeneiro</option>
                        </select>
                    </div>
                </div>
                <div className="DataInputs">
                    <div className="dataInputUnic">
                    <h5>Interesse</h5>
                    <select >
                            <option value="">Aluguel</option>
                            <option value="">Compra</option>
                        </select>
                       
                    </div>
                    <div className="dataInputUnic">
                    <h5>Tipo</h5>
                    <select >
                            <option value="">Residencial</option>
                            <option value="">Comercial</option>
                        </select>
                    </div>
                    <div className="dataInputUnic">
                    <h5>Subtipo</h5>
                    <select >
                            <option value="">Apartamento</option>
                            <option value="">Casa</option>
                        </select>
                    </div>

                <div className="dataInputUnic">
                    <h5>Estado de interesse</h5>
                    <select >
                            <option value="">Estado</option>
                            <option value="">Rio de Jeneiro</option>
                        </select>
                    </div>
                <div className="dataInputUnic">
                    <h5>Cidade de interesse</h5>
                    <select >
                            <option value="">Cidade</option>
                            <option value="">Rio Bonito</option>
                        </select>
                    </div>
                </div>

                <div className="ButtonsForm">
                <button className="send">Cadastrar Cliente</button>
                <button className="cancel" onClick={handleCloseModalProcess}>X Cancelar</button>
                </div>
            </div>
        </div>
        </div>
        </Modal>
        </>
    )
}