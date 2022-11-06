import "./pricing.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Plains } from "../../components/Plains/Plains";
import {IoCheckmarkOutline} from "react-icons/io5"

export function Pricing() {
    return (
        <div className="Pricing">
            <Navbar2 />
            <h2>Escolha o <span>plano ideal</span> para o seu negócio</h2>
            <h4>Cada plano atende a uma necessidade, de acordo com as ferramentas oferecidas. <br/>Você poderá alterar a qualquer momento.</h4>

            <Plains />

            <div className="future">
                <h3>Em breve:</h3>
                <h4><IoCheckmarkOutline /> Integração com portais</h4>
                <h4><IoCheckmarkOutline /> Assinatura digital de contrato</h4>
                <h4><IoCheckmarkOutline /> Disparo de e-mail automático personalizável</h4>
                <h4><IoCheckmarkOutline /> Gerenciamento de leads</h4>
                <h4><IoCheckmarkOutline /> Aplicativo para sua imobiliária</h4>
                <h4><IoCheckmarkOutline /> Agendamento de visitas via WhatsApp</h4>
                <h4><IoCheckmarkOutline /> Novos métodos de pagamento</h4>
            </div>

        </div>
    )
}