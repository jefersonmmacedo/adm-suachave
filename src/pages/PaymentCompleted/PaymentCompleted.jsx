import { IoCheckmarkCircle } from "react-icons/io5";
import Navbar2 from "../../components/Nav/Navbar";
import "./paymentCompleted.css"

export function PaymentCompleted() {
    return (
        <div className="PaymentCompleted">
            <Navbar2 />
            
            <div className="Payment">
            <div className="PlainSelected">
                    <h3><IoCheckmarkCircle />Pagamento Finalizado</h3>
                  <div className="pricePlain">
                    <h5>ID Pedido:</h5>
                    <h4>10203020</h4>
                </div>
                  <div className="pricePlain">
                    <h5>Data:</h5>
                    <h4>05 de Novembro de 2022</h4>
                </div>
                  <div className="pricePlain">
                    <h5>Total</h5>
                    <h4>R$ 149,99</h4>
                </div>
                <div className="pricePlain">
                    <h5>Tipo de pagamento</h5>
                    <h4>Plano/Mensal</h4>
                </div>
                  <div className="pricePlain">
                    <h5>Forma de pagamento:</h5>
                    <h4>Pix</h4>
                </div>

            </div>

            <div className="PaymentPlayn">
                <h3>Obrigado por sua compra</h3>
                <h5>Estamos muito felizes que você faça parte de nosso time. <br />
                Estamos trabalhando duro para trazer melhorias e facilitar o contato das imobiliárias com mais clientes a cada dia.</h5>
                <br />
                <h5>Obs.: O pagamento será confirmado em até 48h, você receberá um e-mail de confirmação. <br />
                Não se preocupe, seu acesso ja está liberado!</h5>

                <a href="/painel/planos">Ir para o meu painel</a>
            </div>
            </div>
        </div>
    )
}