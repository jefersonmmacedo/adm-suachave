import "./viewPropertyChat.css"
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";

export function ViewPropertyChat({id}) {

    const [filter, setFilter] = useState(false);

          function handleFiltro(e) {
            e.preventDefault();
    
            setFilter(!filter)
            console.log(!filter)
        }

        const {data} = useFetch(`/property/${id}`)

        if(!data) {
            return (
                <h5>Carregando...</h5>
            )
        }

    return (
        <div className="ViewPropertyChat">
  <button className="btnProperty" onClick={handleFiltro}><IoHomeOutline/> Ver Imóvel</button>
        <div className={filter === true ? "searchItensFilter" : "searchItensFilterNone"}>
        <div className="buttonsFilter">
        <button className="btnFilter" onClick={handleFiltro}>X</button>
        </div>
        <div className="searchOptionsFilter">
            <div className="form">
                   {data[0]?.title}
            </div>
        </div>
    </div>
        </div>
    )
}