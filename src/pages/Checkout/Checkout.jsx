import { IoCheckbox } from "react-icons/io5";
import Navbar2 from "../../components/Nav/Navbar";
import qrcode from "../../assets/images/qrcode.png";
import "./checkout.css"

export function Checkout() {
    return (
        <div className="Checkout">
            <Navbar2 />
            
            <div className="Payment">
            <div className="PlainSelected">
                    <h3>Plano Selecionado</h3>
                    <div className="plain">
                        <h4><span>Plano</span> Básico</h4>

                        <a href="/planos">Alterar plano</a>
                    </div>

                    <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo [Breve]</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> Imóveis em seu site</p>
                    <p><IoCheckbox /> Imóveis no site Sua Chave</p>
                    <p><IoCheckbox /> Imóveis no app Sua Chave [Breve]</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <div className="pricePlain">
                    <p>Valor Total</p>
                    <h3>149,99/Mensal</h3>
                </div>
            </div>

            <div className="PaymentPlayn">
                <h3>Método de pagamento</h3>
                <p>Atualmente aceitamos pagamentos apenas via pix. Com pagamento efetuado via qr code e
                chave aleatória e envio de comprovante via site nas etapas a seguir</p>
                <br />
                <p>Recomendado: Adicionar o e-mail de cadastro na descrição do comprovante</p>

                <div className="Method">
                <h4>Escaneie o QR-CODE</h4>
                <img src={qrcode} alt="" />

                <h4>Chave aleatória</h4>
                <p>chna415sisjns-5s8dcnnsjs5dwdw5-5d8dw-mdwwd-101kl</p>
                </div>
                <a href="/">Enviar comprovante</a>
            </div>
            </div>
        </div>
    )
}