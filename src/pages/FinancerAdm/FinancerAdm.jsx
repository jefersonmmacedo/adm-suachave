import { FaThumbsDown} from "react-icons/fa"
import { FiDollarSign, FiThumbsDown} from "react-icons/fi"
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoEyeOutline, IoTrashOutline, IoCloseOutline} from "react-icons/io5"
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar";
import "./financerAdm.css";
import Modal from 'react-modal';
import { useState } from "react";
import { mask as masker, unMask } from "remask";
import { toNumber } from "vanilla-masker";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useEffect } from "react";
import api from "../../services/api";
import { DateFormat } from "../../components/DateFormat/DateFormat";

export function FinancerAdm() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {newFinancer} = useContext(AuthContext);

    const [isOpenModalSearch, setIsOpenModaSearch] = useState(false);
    const [typeButton, setTypeButton] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [valueFinance, setValueFinance] = useState("");

    const [financer, setFinancer] = useState([])

    useEffect(() => {
        async function loadFinancer() {
            await api.get(`/financer/company/${user.id}`).then((res) => {
                setFinancer(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }

        loadFinancer()
    }, [])

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

        function ChangeMaskValueFinance(e) {
            const originalValue = unMask(e.target.value);
            const maskedValue = masker(originalValue, [
                "9,99",
                "99,99",
                "999,99",
                "9.999,99",
                "99.999,99",
                "999.999,99",
                "9.999.999,99",
                "99.999.999,99",
                "999.999.999,99",
                "9.999.999.999,99",
                "99.999.999.999,99",
                "999.999.999.999,99",
            ]);
        
            setValueFinance(maskedValue)
          }


      Modal.setAppElement('#root');
    return (
        <div className="FinancerAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <div className="infosFinancer">
                        <div className="infoFinancerUnic">
                            <div className="top">
                                <h5>Entradas</h5>
                                <IoArrowUpCircleOutline color="00a859" size={24}/>
                            </div>
                            <h2>R$ 150.000,00</h2>
                        </div>
                        <div className="infoFinancerUnic">
                            <div className="top">
                                <h5>Saídas</h5>
                                <IoArrowDownCircleOutline color="ed3237" size={24}/>
                            </div>
                            <h2>R$ 45.000,00</h2>
                        </div>
                        </div>
                        <div className="infosFinancer">
                        <div className="infoFinancerUnicTotal">
                            <div className="top">
                                <h5>Saldo</h5>
                                <FiDollarSign color="fff" size={24}/>
                            </div>
                            <h2>R$ 105.000,00</h2>
                        </div>
                        <div className="infoFinancerUnicTotal2">
                            <div className="top">
                                <h5>Pagtos em Atraso</h5>
                                <FiThumbsDown color="fff" size={24}/>
                            </div>
                            <h2>R$ 105.000,00</h2>
                        </div>
                </div>
            <div className="financerList">
                <button onClick={handleOpenModalSearch}>+ Nova Transação </button>
                <div className="searchFinance">
                    <input type="search" placeholder="Busque pelo título" />
                    <select>
                        <option value="">Filtrar por:</option>
                        <option value="">Receitas</option>
                        <option value="">Despesas</option>
                        <option value="">Vencidos</option>
                        <option value="">À vencer</option>
                    </select>
                    <select>
                        <option value="">Período:</option>
                        <option value="">Este mês</option>
                        <option value="">Esta Semana</option>
                        <option value="">Hoje</option>
                        <option value="">Últimos 3 meses</option>
                        <option value="">Últimos 6 meses</option>
                        <option value="">Últimos 9 meses</option>
                        <option value="">Último ano</option>
                    </select>
                </div>

                {financer.map((financerUnci) => {
                    return (
                <div className="FinancerListUnic" key={financerUnci.id}>
                    <h5>{financerUnci.title}</h5>
                    <h5 className={financerUnci.type === "Receita" ? "up" : "down"}>R$ {financerUnci.value}</h5>
                    <h5 className="date"><DateFormat date={financerUnci.created_at}/></h5>
                    <div className="buttons">
                    <button><IoEyeOutline /> </button>
                    </div>
                </div>
                    )
                })}

            </div>
            </div>


            <Modal isOpen={isOpenModalSearch} onRequestClose={handleCloseModalSearch}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalSearch}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-home-Search">
            <div className="itensModalHome-Search">
               <div className="form">
                    {/* <input type="text" placeholder="Título" /> */}
                    <select value={title} onChange={handleSelectTitle}>
                        <option value="">Selecione</option>
                        <option value="Entrada de Receita">Entrada de Receita</option>
                        <option value="Sangria - Saída de recursos">Sangria - Saída de recursos</option>
                        <option value="Conta de Luz">Conta de Luz</option>
                        <option value="Recebimento dívida antiga">Recebimento dívida antiga</option>
                        <option value="Conta de internet">Conta de internet</option>
                        <option value="Avaliação de imóvel">Avaliação de imóvel</option>
                        <option value="Recebimento de Aluguel">Recebimento de Aluguel</option>
                        <option value="Recebimento de IPTU">Recebimento de IPTU</option>
                        <option value="Recebimento de Condomínio">Recebimento de Condomínio</option>
                        <option value="Salário de funcionário">Salário de funcionário</option>
                        <option value="Recebimento de Venda">Recebimento de Venda</option>
                        <option value="Reparo em imóvel">Reparo em imóvel</option>
                        <option value="Pagamento de aluguel">Pagamento de aluguel</option>
                        <option value="Conta de água">Conta de água</option>
                        <option value="IPTU">IPTU</option>
                        <option value="Despesa com automóvel">Despesa com automóvel</option>
                        <option value="Recursos informática">Recursos informática</option>
                        <option value="Insumos papelaria">Insumos papelaria</option>
                        <option value="Recursos documentação">Recursos documentação</option>
                    </select>
                    <textarea cols="30" rows="10" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <div className="TypeButtons">
                        <button className={typeButton === "Receita" ? "btnType3" : "btnType1"} onClick={() => handleNewType("Receita")}><IoArrowUpCircleOutline />Receita</button>
                        <button className={typeButton === "Despesa" ? "btnType4" : "btnType2"} onClick={() => handleNewType("Despesa")}><IoArrowDownCircleOutline />Despesa</button>
                    </div>
                    <div className="dataForm">
                    <h4>R$</h4>
                    <input type="text" placeholder="Valor" value={valueFinance} onChange={ChangeMaskValueFinance}/>
                    </div>
                    <button onClick={handleNewFincancer}>Cadastrar</button>
                    </div>
            </div>
            </div>
            </Modal>
        </div>
    )
}

