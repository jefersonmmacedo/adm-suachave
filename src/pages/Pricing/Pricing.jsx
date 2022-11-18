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
                <h4>Serviços disponíveis <span>em breve</span>:</h4>
                <h5><IoCheckmarkOutline /> Integração com portais</h5>
                <h5><IoCheckmarkOutline /> Assinatura digital de contrato</h5>
                <h5><IoCheckmarkOutline /> Disparo de e-mail automático personalizável</h5>
                <h5><IoCheckmarkOutline /> Gerenciamento de leads</h5>
                <h5><IoCheckmarkOutline /> Aplicativo para clientes</h5>
                <h5><IoCheckmarkOutline /> Aplicativo para gerenciamento de sua imobiliária</h5>
                <h5><IoCheckmarkOutline /> Aplicativo único para sua imobiliáiria</h5>
                <h5><IoCheckmarkOutline /> Agendamento de visitas via WhatsApp</h5>
            </div>

        </div>
    )
}