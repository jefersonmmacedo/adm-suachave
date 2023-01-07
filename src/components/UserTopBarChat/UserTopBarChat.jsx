import { useFetch } from "../../hooks/useFetch"
import "./userTopBarChat.css"

export function UserTopBarChat({idClient}) {

    const {data} = useFetch(`/client/unicid/${idClient}`)

    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }
    return (
        <div className="UserTopBar">
            <div className="imageTop">
                <img src={data[0]?.avatar} alt={`Avatar do cliente ${data[0]?.name}`} />
            </div>
            <div className="textTop">
                <h5>{data[0]?.name}</h5>
                <h6>{data[0]?.city} - {data[0]?.uf}</h6>
            </div>
      </div>
    )
}