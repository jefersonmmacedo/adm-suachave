import { FaThumbsDown} from "react-icons/fa"
import { FiDollarSign, FiThumbsDown} from "react-icons/fi"
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoThumbsDownOutline, IoEyeOutline} from "react-icons/io5"
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./financerAdm.css"

export function FinancerAdm() {
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
                <button>+ Nova Transação </button>
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
                <div className="FinancerListUnic">
                    <h5>Venda de Imóvel</h5>
                    <h5 className="up">R$ 10.000,00</h5>
                    <h5 className="date">15/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Pintura Imóvel Aluguel</h5>
                    <h5 className="down">R$ 3.000,00</h5>
                    <h5 className="date">13/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Conta de luz</h5>
                    <h5 className="down">R$ 120,00</h5>
                    <h5 className="date">08/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Recebimento de Transação</h5>
                    <h5 className="up">R$ 25.000,00</h5>
                    <h5 className="date">05/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Venda de Imóvel</h5>
                    <h5 className="up">R$ 10.000,00</h5>
                    <h5 className="date">15/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Pintura Imóvel Aluguel</h5>
                    <h5 className="down">R$ 3.000,00</h5>
                    <h5 className="date">13/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Conta de luz</h5>
                    <h5 className="down">R$ 120,00</h5>
                    <h5 className="date">08/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Recebimento de Transação</h5>
                    <h5 className="up">R$ 25.000,00</h5>
                    <h5 className="date">05/11/2022</h5>
                    <button><IoEyeOutline /> </button>
                </div>
            </div>
            </div>
        </div>
    )
}

