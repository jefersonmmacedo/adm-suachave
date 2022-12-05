import { useFetch } from "../../hooks/useFetch";

export function PropertiesCountSale() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {data} = useFetch(`/property/company/${user.id}`);

    const Sale = data?.filter((property) => property.availability === "Vendido")
    
    return (
        <div className="PropertiesCountSale">
            {Sale?.length}
        </div>
    )
}