import { useFetch } from "../../hooks/useFetch";

export function PropertiesCountRent() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {data} = useFetch(`/property/company/${user.id}`);

    const Rent = data?.filter((property) => property.availability === "Alugado")
    
    return (
        <div className="PropertiesCountRent">
            {Rent?.length}
        </div>
    )
}