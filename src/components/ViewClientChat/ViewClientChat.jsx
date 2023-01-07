import "./viewClientChat.css"
import { useState } from "react";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";

export function ViewClientChat({id}) {

    const [filter, setFilter] = useState(false);

          function handleFiltro(e) {
            e.preventDefault();
    
            setFilter(!filter)
            console.log(!filter)
        }

        const {data} = useFetch(`/client/unicid/${id}`)

        if(!data) {
            return (
                <h5>Carregando...</h5>
            )
        }

    return (
        <div className="ViewClientChat">
  <button className="btnProperty" onClick={handleFiltro}><IoPersonOutline /> Ver Cliente</button>
        <div className={filter === true ? "searchItensFilter" : "searchItensFilterNone"}>
        <div className="buttonsFilter">
        <button className="btnFilter" onClick={handleFiltro}>X</button>
        </div>
        <div className="searchOptionsFilter">
            <div className="form">
                   {data[0]?.name}
            </div>
        </div>
    </div>
        </div>
    )
}