import { IoCheckbox, IoCheckmarkCircle } from "react-icons/io5";
import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./plainsAdm.css"

export function PlainsAdm() {
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
                <a href="/plano">Novo Pagamento</a>
            </div>
            </div>
            </div>
        </div>
    )
}