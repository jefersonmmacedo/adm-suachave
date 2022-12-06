import { FiDollarSign, FiThumbsDown} from "react-icons/fi"
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoEyeOutline, IoCloseOutline, IoCreateOutline} from "react-icons/io5"
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar";
import "./financerAdm.css";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import { DateFormat } from "../../components/DateFormat/DateFormat";
import { NewFinancer } from "../../components/NewFinancer/NewFinancer";

export function FinancerAdm() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);
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
    }, [user.id])

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
                                <h5>Aluguéis em Atraso</h5>
                                <FiThumbsDown color="fff" size={24}/>
                            </div>
                            <h2>R$ 105.000,00</h2>
                        </div>
                </div>
            <div className="financerList">
             <NewFinancer />
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
                    <button><IoCreateOutline /> </button>
                    </div>
                </div>
                    )
                })}

            </div>
            </div>



        </div>
    )
}

