import { useState } from "react";
import { useEffect } from "react";
import { IoCheckbox, IoCheckmarkCircle, IoCloseOutline } from "react-icons/io5";
import { DateFormat } from "../../components/DateFormat/DateFormat";
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import api from "../../services/api";
import Modal from 'react-modal';
import moment from 'moment';
import "./plainsAdm.css"

export function PlainsAdm() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const [isOpenModalSearch, setIsOpenModaSearch] = useState(false);
    const [voucher, setVoucher] = useState()
    
  const [plain, setPlain] = useState();
  const [myPlain, setMyPlain] = useState();
  const [myPayment, setMyPayment] = useState();

    useEffect(() => {
        async function loadMyPlain() {
          await api.get(`/myplain/${user.id}`).then((res) => {
            console.log(res.data[0])
            setMyPlain(res.data[0])

            loadPlains(res.data[0].idPlain)
          })
        }
    
        async function loadPlains(id) {
            console.log(id)
          await api.get(`/plains/plain/${id}`).then((res) => {
            setPlain(res.data[0])
            console.log(res.data[0])
          })
        }
        loadMyPlain()
      }, [])

    useEffect(() => {
        async function loadPlains() {
          await api.get(`/payments/${user.id}`).then((res) => {
            setMyPayment(res.data)
            console.log(res.data)
          })
        }
    
        loadPlains()
      }, [])


      function handleOpenModalSearch(link) {
        console.log("Olá")
          setIsOpenModaSearch(true)
          setVoucher(link)
        }
      
        function handleCloseModalSearch(e) {
          e.preventDefault();
          setIsOpenModaSearch(false);
        }
  

      Modal.setAppElement('#root');
    return (
        <div className="PlainsAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Meu plano e histórico de pagamentos</h3>

            <div className="Payment">
            <div className="PlainSelected">
                    <h3><IoCheckmarkCircle /> Plano Ativo</h3>
                    <div className="plain">
                        <h4>{plain?.name}</h4>

                        <a href="/novoplano">Alterar plano</a>
                    </div>

                    <div className="text">
                    {plain?.infos.map((info) => {
                        return ([
                            <p><IoCheckbox /> {info.info}</p>
                        ])
                    })}
                </div>
                <div className="pricePlain">
                    <p>Valor Total</p>
                    <h3>R$ {plain?.value}/Mensal</h3>
                </div>
            </div>

            <div className="PaymentPlayn">
                <a href={`/plano/${plain?.id}`}>Novo Pagamento</a>
                
                {myPayment?.map((payment) => {
                    return (
                        <div className="payments">
                        <div className="itensPayment">
                        <h6>ID:</h6>
                        <h5>{payment.id.substring(0, 8)}</h5>
                        </div>
                        <div className="itensPayment">
                        <h6>Valor:</h6>
                        <h5>R$ {payment.value}</h5>
                        </div>
                        <div className="itensPayment">
                        <h6>Período:</h6>
                        <h5>{payment.period} Dias</h5>
                        </div>
                        <div className="itensPayment">
                        <h6>Status:</h6>
                        <h5> {payment.status}</h5>
                        </div>
                        <div className="itensPayment">
                        <h6>Data:</h6>
                        <h5> <DateFormat date={payment.created_at}/></h5>
                        </div>
                        <div className="itensPayment">
                        <h6>Comprovante:</h6>
                        <h5 className="link" onClick={() => handleOpenModalSearch(payment.linkComprovant)}> Abrir</h5>
                        </div>
    
                    </div>
                    )
                })}

            </div>
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
               <img src={voucher} alt="" />
            </div>
            </div>
            </Modal>


        </div>
    )
}