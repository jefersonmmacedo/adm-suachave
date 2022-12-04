import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import { MyButtonComponent } from "../../components/UploadFiles/UploadFiles";
import "./newProperty.css";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { IoCheckmarkOutline, IoStar, IoStarOutline, IoTrash} from "react-icons/io5";
import { mask as masker, unMask } from "remask";
import buscaDistrito from "../../services/api-buscaDistrito";
import { toast } from 'react-toastify';
import { toNumber } from "vanilla-masker";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

export function NewProperty() {
    
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const {newProperty} = useContext(AuthContext);
    
    const [districtAll, setDistrictAll] = useState([]);
    const [title, setTitle] = useState("");
    const [road, setRoad] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [subType, setSubType] = useState("");
    const [status, setStatus] = useState("");
    const [availability, setAvailability] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [garage, setGarage] = useState("");
    const [suite, setSuite] = useState("");
    const [restroom, setRestroom] = useState("");
    const [priceSale, setPriceSale] = useState("");
    const [priceRent, setPriceRent] = useState("");
    const [textRent, setTextRent] = useState("");
    const [condominium, setCondominium] = useState("");
    const [iptu, setIptu] = useState("");
    const [otherPrices, setOtherPrices] = useState("");
    const [buildingArea, setBuildingArea] = useState("");
    const [siglaBuildingArea, setSiglaBuildingAreat] = useState("");
    const [totalArea, setTotalArea] = useState("");
    const [siglaTotalArea, setSiglaTotalArea] = useState("");
    const [yearOfConstruction, setYearOfConstruction] = useState("");
    const [images, setImages] = useState([]);
    const [featuredImage, setFeaturedImage] = useState("");
    const [platformVideo, setPlatformVideo] = useState("");
    const [video, setVideo] = useState("");
    const [slider, setSlider] = useState("");
    const [financing, setFinancing] = useState("");
    const [characteristcs, setCharacteristcs] = useState([]);

    const idv4 = uuidv4();
    const idProperty = idv4.substring(0,8);

    function uploadFiles2(data) {
        setImages(images.concat(data))
        if(images.length === 0) {
            setFeaturedImage(data[0].link)
        }
    }

    function handleFeaturedImage(data) {
        setFeaturedImage(data)
    }

    function handleNewCharacteristcs(dado) {
        const findCharacteristc = characteristcs.find(item => item.item === dado);
        if(findCharacteristc) {
            const filterCharacteristc = characteristcs.filter((item) => item.item !== dado);
            setCharacteristcs(filterCharacteristc);
            return;
        } 
            const data = {id: uuidv4(), item: dado}
            setCharacteristcs([...characteristcs, data])
    }

    function handleDeleteImage(dado) {
        const findImages = images.find(item => item.link === dado);
        if(findImages) {
        const filterImages = images.filter((item) => item.link !== dado);
        setImages(filterImages);

        if(dado === images[0].link) {
            setFeaturedImage(images[0].link);
            return;
        }
        return;
        } 
    }



function handleNewProperty() {
    newProperty({
        id:idProperty, idCompany: user.id, title, road, district, city, uf, description, type, subType, status,
        availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium,
        iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
        images, featuredImage, platformVideo, video, slider, financing, characteristcs
    })
}

async function handleSearchDistrict(ufSelect) {
    console.log(ufSelect)
    try {
      const res = await buscaDistrito.get(`${ufSelect}/distritos`) 
        console.log(res.data)
        setDistrictAll(res.data)
        console.log(res.data[0].municipio.nome);
        return;
      }catch{
        console.log("error")
        toast.error("Escolha um estado e clica em buscar cidades")
    }
    return
}

if(districtAll) {
    districtAll.sort(function(a,b) {
        if(a.nome < b.nome ) {
            return -1
        } else {
            return true
        }
    })
    }

function handleSetectCity(e) {
    console.log(e.target.value)
    setCity(e.target.value)
  }
  function handleSetectUf(e) {
      console.log(e.target.value)
      handleSearchDistrict(e.target.value)
      setUf(e.target.value)
  }

function handleType(e) {
    setType(e.target.value)
    console.log(e.target.value)
}
function handleSubType(e) {
    setSubType(e.target.value)
    console.log(e.target.value)
}
function handleStatus(e) {
    setStatus(e.target.value)
    console.log(e.target.value)
}
function handleAvailability(e) {
    setAvailability(e.target.value)
    console.log(e.target.value)
}
function handleBedroom(e) {
    setBedroom(e.target.value)
    console.log(e.target.value)
}
function handleRestroom(e) {
    setRestroom(e.target.value)
    console.log(e.target.value)
}
function handleSuite(e) {
    setSuite(e.target.value)
    console.log(e.target.value)
}
function handleGarage(e) {
    setGarage(e.target.value)
    console.log(e.target.value)
}
function handleTextRent(e) {
    setTextRent(e.target.value)
    console.log(e.target.value)
}
function handleSiglaBuildingArea(e) {
    setSiglaBuildingAreat(e.target.value)
    console.log(e.target.value)
}
function handleSiglaTotalArea(e) {
    setSiglaTotalArea(e.target.value)
    console.log(e.target.value)
}
function handlePlatformVideo(e) {
    setPlatformVideo(e.target.value)
    console.log(e.target.value)
}
function handleSlider(e) {
    setSlider(e.target.value)
    console.log(e.target.value)
}
function handleFinancing(e) {
    setFinancing(e.target.value)
    console.log(e.target.value)
}

function ChangeMaskValueRent(e) {
    const originalValue = unMask(e.target.value);
    const maskedValue = masker(originalValue, [
                "9,99",
                "99,99",
                "999,99",
                "9.999,99",
                "99.999,99",
                "999.999,99",
                "9.999.999,99",
                "99.999.999,99",
                "999.999.999,99",
                "9.999.999.999,99",
                "99.999.999.999,99",
                "999.999.999.999,99",
    ]);

    setPriceRent(maskedValue)
  }
function ChangeMaskValueSale(e) {
    const originalValue = unMask(e.target.value);
    const maskedValue = masker(originalValue, [
                      "9,99",
                "99,99",
                "999,99",
                "9.999,99",
                "99.999,99",
                "999.999,99",
                "9.999.999,99",
                "99.999.999,99",
                "999.999.999,99",
                "9.999.999.999,99",
                "99.999.999.999,99",
                "999.999.999.999,99",
    ]);

    setPriceSale(maskedValue)
  }
function ChangeMaskValueCondominium(e) {
    const originalValue = unMask(e.target.value);
    const maskedValue = masker(originalValue, [
                      "9,99",
                "99,99",
                "999,99",
                "9.999,99",
                "99.999,99",
                "999.999,99",
                "9.999.999,99",
                "99.999.999,99",
                "999.999.999,99",
                "9.999.999.999,99",
                "99.999.999.999,99",
                "999.999.999.999,99",
    ]);

    setCondominium(maskedValue)
  }
function ChangeMaskValueOtherPricing(e) {
    const originalValue = unMask(e.target.value);
    console.log(unMask(e.target.value))
    const maskedValue = masker(originalValue, [
                      "9,99",
                "99,99",
                "999,99",
                "9.999,99",
                "99.999,99",
                "999.999,99",
                "9.999.999,99",
                "99.999.999,99",
                "999.999.999,99",
                "9.999.999.999,99",
                "99.999.999.999,99",
                "999.999.999.999,99",
    ]);

    setOtherPrices(maskedValue)
  }
function ChangeMaskValueIptu(e) {
    const originalValue = unMask(e.target.value);
    const maskedValue = masker(originalValue, [
                      "9,99",
                "99,99",
                "999,99",
                "9.999,99",
                "99.999,99",
                "999.999,99",
                "9.999.999,99",
                "99.999.999,99",
                "999.999.999,99",
                "9.999.999.999,99",
                "99.999.999.999,99",
                "999.999.999.999,99",
    ]);

    setIptu(maskedValue)
  }


    
    return (
        <div className="NewProperty">
            <NavbarAdm />
            <ToolBar />
            <div className="
            aside">
            <div className="textHome">
            <h3>Novo imóvel</h3>
                <a className="link" href="/novoimovel">Voltar</a>
                </div>

            <div className="textHome">
            <h4>Dados do imóvel</h4>
                </div>
                <div className="form">
                    <input type="text" className={title === "" ? "" : "select"} placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
                    {/* <input type="text" placeholder="Endereço"/> */}
                    <div className="data">
                    <input type="text" className={road === "" ? "" : "select"} placeholder="Rua" value={road} onChange={e => setRoad(e.target.value)}/>
                    <input type="text" className={district === "" ? "" : "select"} placeholder="Bairro" value={district} onChange={e => setDistrict(e.target.value)}/>
                    <select value={uf} onChange={handleSetectUf} className={uf === "" ? "" : "select"}> 
                            <option value="">Escolha seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>     
                    </select>
                    <select value={city} onChange={handleSetectCity} className={city === "" ? "" : "select"}> 
                    {districtAll.length === 0 ?
                    <option value={city}>{city}</option>
                    :
                    <>
                    <option value="">Escolha sua cidade</option>
                    {districtAll?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={district.nome}>{district.nome}</option>
                            )
                        })}
                    </>
                    }     
                    </select>
                    </div>
                    <textarea cols="30" rows="10" className={description === "" ? "" : "select"} placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <div className="data">
                    <select value={type} onChange={handleType} className={type === "" ? "" : "select"}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select value={subType} onChange={handleSubType} className={subType === "" ? "" : "select"}>
                        {type === "Residencial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Casa geminada">Casa geminada</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Bangalô">Bangalô</option>
                        <option value="Edícula">Edícula</option>
                        <option value="Flat">Flat</option>
                        <option value="Casa de vila">Casa de vila</option>
                        <option value="Condomínio fechado">Condomínio fechado</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Apartamento duplex">Apartamento duplex</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Cobertura duplex">Cobertura duplex</option>
                        <option value="Loft">Loft</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Mansão">Mansão</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Comercial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Loja">Loja</option>
                        <option value="Conjunto comercial">Conjunto comercial</option>
                        <option value="Ponto comercial">Ponto comercial</option>
                        <option value="Sala Comercial">Sala Comercial</option>
                        <option value="Prédio">Prédio</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Industrial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Galpão">Galpão</option>
                        <option value="Área industrial">Área industrial</option>
                        </>
                        : type === "Rural" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Chácara">Chácara</option>
                        <option value="Fazenda">Fazenda</option>
                        <option value="Sítio">Sítio</option>
                        </>
                        : type === "Terrenos e Lotes" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Área">Área</option>
                        <option value="Terreno/Lote">Terreno/Lote</option>
                        </>
                        :  <option value="">Selecione o tipo</option>
                        }
                    </select>
                    <select value={status} onChange={handleStatus} className={status === "" ? "" : "select"}>
                        <option value="">Estado</option>
                        <option value="Aluguel">Alugel</option>
                        <option value="Venda">Venda</option>
                        <option value="Temporada">Temporada</option>
                    </select>
                    <select value={availability} onChange={handleAvailability} className={availability === "" ? "" : "select"}>
                        <option value="">Disponibilidade</option>
                        <option value="Disponível">Disponível</option>
                        <option value="Insponível">Insponível</option>
                        <option value="Vendido">Vendido</option>
                        <option value="Alugado">Alugado</option>
                    </select>
                    </div>
                    <div className="data">
                    <select value={bedroom} onChange={handleBedroom} className={bedroom === "" ? "" : "select"}>
                        <option value="">Quartos</option>
                        <option value="1">1 Quarto</option>
                        <option value="2">2 Quartos</option>
                        <option value="3">3 Quartos</option>
                        <option value="4">4 Quartos</option>
                        <option value="5">5 Quartos</option>
                        <option value="6">6 Quartos</option>
                        <option value="7">7 Quartos</option>
                        <option value="8">8 Quartos</option>
                        <option value="9">9 Quartos</option>
                        <option value="10">10 Quartos</option>
                    </select>
                    <select value={suite} onChange={handleSuite} className={suite === "" ? "" : "select"}>
                        <option value="">Suítes</option>
                        <option value="1">1 Suíte</option>
                        <option value="2">2 Suítes</option>
                        <option value="3">3 Suítes</option>
                        <option value="4">4 Suítes</option>
                        <option value="5">5 Suítes</option>
                        <option value="6">6 Suítes</option>
                        <option value="7">7 Suítes</option>
                        <option value="8">8 Suítes</option>
                        <option value="9">9 Suítes</option>
                        <option value="10">10 Suítes</option>
                    </select>
                    <select value={restroom} onChange={handleRestroom} className={restroom === "" ? "" : "select"}>
                        <option value="">Banheiros</option>
                        <option value="1">1 Banheiro</option>
                        <option value="2">2 Banheiros</option>
                        <option value="3">3 Banheiros</option>
                        <option value="4">4 Banheiros</option>
                        <option value="5">5 Banheiros</option>
                        <option value="6">6 Banheiros</option>
                        <option value="7">7 Banheiros</option>
                        <option value="8">8 Banheiros</option>
                        <option value="9">9 Banheiros</option>
                        <option value="10">10 Banheiros</option>
                    </select>
                    <select value={garage} onChange={handleGarage} className={garage === "" ? "" : "select"}>
                        <option value="">Vagas de garagem</option>
                        <option value="1">1 Vaga de garagem</option>
                        <option value="2">2 Vagas de garagem</option>
                        <option value="3">3 Vagas de garagem</option>
                        <option value="4">4 Vagas de garagem</option>
                        <option value="5">5 Vagas de garagem</option>
                        <option value="6">6 Vagas de garagem</option>
                        <option value="7">7 Vagas de garagem</option>
                        <option value="8">8 Vagas de garagem</option>
                        <option value="9">9 Vagas de garagem</option>
                        <option value="10">10 Vagas de garagem</option>
                    </select>
                    </div>
                    <div className="data">
                    <input type="text" className={priceSale === "" ? "" : "select"} placeholder="Preço Venda" value={priceSale} onChange={ChangeMaskValueSale}/>
                    <input type="text" className={priceRent === "" ? "" : "select"} placeholder="Preço Aluguel" value={priceRent} onChange={ChangeMaskValueRent}/>
                    <select value={textRent} onChange={handleTextRent} className={textRent === "" ? "" : "select"}>
                        <option value="Diário">Diário</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensal">Mensal</option>
                        <option value="Trimestral">Trimestral</option>
                        <option value="Semestral">Semestral</option>
                        <option value="Anual">Anual</option>
                    </select>
                    </div>
                    <div className="data">
                    <input type="text" className={condominium === "" ? "" : "select"} placeholder="Preço Condimínio" value={condominium} onChange={ChangeMaskValueCondominium}/>
                    <input type="text" className={iptu === "" ? "" : "select"} placeholder="Preço IPTU" value={iptu} onChange={ChangeMaskValueIptu}/>
                    <input type="text" className={otherPrices === "" ? "" : "select"} placeholder="Preço Outros encargos" value={otherPrices} onChange={ChangeMaskValueOtherPricing}/>
                    <input type="text" className={yearOfConstruction === "" ? "" : "select"} placeholder="Ano de construção" value={yearOfConstruction} onChange={e => setYearOfConstruction(e.target.value)}/>
                    </div>
                    <div className="data">
                    <input type="text" className={totalArea === "" ? "" : "select"} placeholder="Área total" value={totalArea} onChange={e => setTotalArea(e.target.value)}/>
                    <select value={siglaTotalArea} onChange={handleSiglaTotalArea} className={siglaTotalArea === "" ? "" : "select"}>
                        <option value="">Sigla área total</option>
                        <option value="M2">M2</option>
                        <option value="Km">Km</option>
                        <option value="Eq">Eq</option>
                    </select>
                    <input type="text" className={buildingArea === "" ? "" : "select"} placeholder="Área de construção" value={buildingArea} onChange={e => setBuildingArea(e.target.value)}/>
                    <select value={siglaBuildingArea} onChange={handleSiglaBuildingArea} className={siglaBuildingArea === "" ? "" : "select"}>
                        <option value="">Sigla área construção</option>
                        <option value="M2">M2</option>
                        <option value="Km">Km</option>
                        <option value="Eq">Eq</option>
                    </select>
                    </div>

                    </div>

                    <div className="textHome">
            <h4>Características</h4>
                </div>
                    <div className="form">
                        <div className="Check">
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Imóvel novo")}>Imóvel novo</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("1º Locação")}>1º Locação</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Sacada")}>Sacada</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Piscina")}>Piscina</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Churrasqueira")}>Churrasqueira</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("2 Ambientes")}>2 Ambientes</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Jardim")}>Jardim</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Wifi")}>Wifi</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Lavanderia")}>Lavanderia</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Elevador")}>Elevador</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Banheiro Social")}>Banheiro Social</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Área de lazer")}>Área de lazer</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Próx. Escola")}>Próx. Escola</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Próx. Ponto de Ônibus")}>Próx. Ponto de Ônibus</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Próx. Farmácia")}>Próx. Farmácia</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Próx. Centro")}>Próx. Centro</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Próx. Supermercado")}>Próx. Supermercado</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Próx. Padaria")}>Próx. Padaria</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Prox. Pracinha")}>Prox. Pracinha</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Área Externa")}>Área Externa</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Entrada independente")}>Entrada independente</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Ciclovia")}>Ciclovia</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Closet")}>Closet</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Cozinha Ampla")}>Cozinha Ampla</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Sistema de Segurança")}>Sistema de Segurança</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Sala de Estar")}>Sala de Estar</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Sala de Jogos")}>Sala de Jogos</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Portão Eletrônico")}>Portão Eletrônico</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Terraço")}>Terraço</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Energia Solar")}>Energia Solar</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Parquinho")}>Parquinho</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Aceita Pets")}>Aceita Pets</button>
                        <button className='btnCheck' onClick={() => handleNewCharacteristcs("Possúi poço")}>Possúi poço</button>

                        {characteristcs.length === 0 ? "" :
                        <div className="characteristcs">
                            {characteristcs.map((item) => {
                                return (
                                    <div className="itemCharacteristc" key={item.id}>
                                        <h5 ><IoCheckmarkOutline/> {item.item}</h5>
                                        <button className="btnItem" onClick={() => handleNewCharacteristcs(item.item)}><IoTrash/></button>
                                    </div>
                                )
                            })}

                        </div>
                        }
                    </div>
                    </div>

                    <div className="textHome">
            <h4>Imagens</h4>
                </div>
                    <div className="form">
                       
                       <MyButtonComponent id={idProperty} uploadFiles2={uploadFiles2}/>

                       {images.length === 0 ? "" : <span>Clique em uma imagem para definir a imagem principal</span>}
                       <div className="myImages">
                        {images?.map((files) => {
                            return (
                        <div className={files.link === featuredImage ? "imageUnicFeatured" : "imageUnic"} key={files.id}>
                        <img src={files.link} alt="" />
                        <button className="btnImage" onClick={() => handleDeleteImage(files.link)}><IoTrash/></button> 
                        <button className="featuredImage" onClick={() => handleFeaturedImage(files.link)}>{files.link === featuredImage ? <IoStar/> : <IoStarOutline/>  }</button>
                        </div> 
                            )
                        })}
                       </div>
                    </div>

                    <div className="textHome">
            <h4>Vídeo</h4>
                </div>
                    <div className="form">
                    <div className="data">
                    <select value={platformVideo} onChange={handlePlatformVideo} className={video === "" ? "" : "select"}>
                        <option value="">Vídeo</option>
                        <option value="Youtube">Youtube</option>
                        <option value="Vímeo">Vímeo</option>
                    </select>
                    <input type="text" className={video === "" ? "" : "select"} placeholder="Link Vídeo" value={video} onChange={e => setVideo(e.target.value)}/>
                    </div>
                    </div>


                    <div className="textHome">
            <h4>Slider e financiamento</h4>
                </div>
                    <div className="form">
                    <div className="data">
                    <select value={slider} onChange={handleSlider} className={slider === "" ? "" : "select"}>
                        <option value="">Slide inicial? (Apenas no site individual)</option>
                        <option value="Sim">Disponível no slide inicial</option>
                        <option value="Não">Não disponível no slide inicial</option>
                    </select>
                    <select value={financing} onChange={handleFinancing} className={financing === "" ? "" : "select"}>
                        <option value="">Aceita financiamento?</option>
                        <option value="Sim">Aceita financiamento</option>
                        <option value="Não">Não Aceita financiamento</option>
                    </select>
                    
                    </div>
                    </div>
                    <button className="btnSend" onClick={handleNewProperty}>Cadastrar anúncio</button>
            </div>
        </div>
    )
}