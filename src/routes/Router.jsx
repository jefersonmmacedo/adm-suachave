import {Route, Routes, Navigate} from 'react-router-dom';
import { Pricing } from '../pages/Pricing/Pricing';
import { SignInCompany } from '../pages/SignInCompany/SignInCompany';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { NewProperty } from '../pages/NewProperty/NewProperty';
import { PlainsAdm } from '../pages/PlainsAdm/PlainsAdm';
import { ChatAdm } from '../pages/ChatAdm/ChatAdm';
import { NotificationsAdm } from '../pages/NotificationsAdm/NotificationsAdm';
import { EquipeAdm } from '../pages/EquipeAdm/EquipeAdm';
import { MyAccountAdm } from '../pages/MyAccountAdm/MyAccountAdm';
import { MenuAdm } from '../pages/MenuAdm/MenuAdm';
import { SchedulingAdm } from '../pages/SchedulingAdm/SchedulingAdm';
import { Checkout } from '../pages/Checkout/Checkout';
import { PaymentCompleted } from '../pages/PaymentCompleted/PaymentCompleted';
import { MyPropertiesList } from '../pages/MyPropertiesList/MyPropertiesList';
import { EditProperty } from '../pages/EditProperty/EditProperty';
import { ChatAdmList } from '../pages/ChatAdmList/ChatAdmList';
import { MyAppointments } from '../pages/MyAppointments/MyAppointments';
import { MyRents } from '../pages/MyRents/MyRents';
import { MySales } from '../pages/MySales/MySales';
import { MyAssessments } from '../pages/MyAssessments/MyAssessments';
import { FinancerAdm } from '../pages/FinancerAdm/FinancerAdm';
import { AccessAdm } from '../pages/AccessAdm/AccessAdm';
import { SupportAdm } from '../pages/SupportAdm/SupportAdm';
import { MyClientsList } from '../pages/MyClientsList/MyClientsList';
import { WebApp } from '../pages/WebApp/WebApp';
import { MyLeads } from '../pages/MyLeads/MyLeads';
import { ChatMessage } from '../pages/ChatMessage/ChatMessage';


function Router () {
const Local = localStorage.getItem("suachave");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null || userLocal.type === "client" ? children : <Navigate to="/"/>
}

    return (
            <Routes>
            <Route path="/" element={<SignInCompany />}/>

            <Route path="/home"
                    element={ <PrivateRoute> <Dashboard /> </PrivateRoute>} />
            <Route path="/novoimovel"
                    element={ <PrivateRoute> <NewProperty /> </PrivateRoute>} />
            <Route path="/editarimovel/:id"
                    element={ <PrivateRoute> <EditProperty /> </PrivateRoute>} />
            <Route path="/imoveis"
                    element={ <PrivateRoute> <MyPropertiesList /> </PrivateRoute>} />
            <Route path="/plano/:id"
                    element={ <PrivateRoute> <Checkout /> </PrivateRoute>} />
            <Route path="/planos"
                    element={ <PrivateRoute> <PlainsAdm /> </PrivateRoute>} />
            <Route path="/novoplano"
                    element={ <PrivateRoute> <Pricing /> </PrivateRoute>} />
            <Route path="/pagamentofinalizado"
                    element={ <PrivateRoute> <PaymentCompleted /> </PrivateRoute>} />
            <Route path="/mensagens"
                    element={ <PrivateRoute> <ChatAdmList /> </PrivateRoute>} />
            <Route path="/chat/:room/:idProperty/:idCompany/:idClient"
                    element={ <PrivateRoute> <ChatMessage /> </PrivateRoute>} />
            <Route path="/notificacoes"
                    element={ <PrivateRoute> <NotificationsAdm /> </PrivateRoute>} />
            <Route path="/agendamentos"
                    element={ <PrivateRoute> <MyAppointments /> </PrivateRoute>} />
           <Route path="/agendamento/:id"
                   element={ <PrivateRoute> <SchedulingAdm /> </PrivateRoute>} />
           <Route path="/alugueis"
                   element={ <PrivateRoute> <MyRents /> </PrivateRoute>} />
           <Route path="/vendas"
                   element={ <PrivateRoute> <MySales /> </PrivateRoute>} />
           <Route path="/avaliacoes"
                   element={ <PrivateRoute> <MyAssessments /> </PrivateRoute>} />
            <Route path="/funcionarios"
                    element={ <PrivateRoute> <EquipeAdm /> </PrivateRoute>} />
            <Route path="/minhaconta"
                    element={ <PrivateRoute> <MyAccountAdm /> </PrivateRoute>} />
            <Route path="/web"
                    element={ <PrivateRoute> <WebApp /> </PrivateRoute>} />
            <Route path="/financeiro"
                    element={ <PrivateRoute> <FinancerAdm /> </PrivateRoute>} />
            <Route path="/historico"
                    element={ <PrivateRoute> <AccessAdm /> </PrivateRoute>} />
            <Route path="/suporte"
                    element={ <PrivateRoute> <SupportAdm /> </PrivateRoute>} />
            <Route path="/menu"
                    element={ <PrivateRoute> <MenuAdm /> </PrivateRoute>} />
            <Route path="/clientes"
                    element={ <PrivateRoute> <MyClientsList /> </PrivateRoute>} />
            <Route path="/leads"
                    element={ <PrivateRoute> <MyLeads /> </PrivateRoute>} />
            </Routes>
           
    )
}

export {Router}