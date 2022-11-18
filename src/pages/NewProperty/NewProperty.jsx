import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import { MyButtonComponent } from "../../components/UploadFiles/UploadFiles";
import "./newProperty.css";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { IoCheckmarkOutline, IoStar, IoStarOutline, IoTrash, IoTrashOutline } from "react-icons/io5";

export function NewProperty() {

    const [title, setTitle] = useState("");
    const [road, setRoad] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [description, setDescription] = useState("");
    const [tipe, setTipe] = useState("");
    const [subtipe, setSubtipe] = useState("");
    const [status, setStatus] = useState("");
    const [availability, setAvailability] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [garage, setGarage] = useState("");
    const [suite, setSuite] = useState("");
    const [restroom, setRestroom] = useState("");
    const [priceSale, setPriceSale] = useState("");
    const [priceRent, setPriceRent] = useState("");
    const [textRent, setTextRent] = useState("");
    const [buildingArea, setBuildingArea] = useState("");
    const [siglaBuildingArea, setSiglaBuildingAreat] = useState("");
    const [totalArea, setTotalArea] = useState("");
    const [siglaTotalArea, setSiglaTotalArea] = useState("");
    const [images, setImages] = useState([]);
    const [featuredImage, setFeaturedImage] = useState("");
    const [platformVideo, setPlatformVideo] = useState("");
    const [video, setVideo] = useState("");
    const [slider, setSlider] = useState("");
    const [financing, setFinancing] = useState("");
    const [characteristcs, setCharacteristcs] = useState([]);

    const idv4 = uuidv4();
    const idProperty = `IMOV-${idv4.substring(0,8)}`;
    console.log(idProperty)

    function uploadFiles2(data) {
        console.log(data)
        console.log(images)
        setImages(images.concat(data))

        if(images.length === 0) {
            setFeaturedImage(data[0].link)
        }
    }
    function handleFeaturedImage(data) {
        console.log(data)
        setFeaturedImage(data)
    }

    function handleNewCharacteristcs(dado) {
    const findCharacteristc = characteristcs.find(item => item.item === dado);
    console.log("findCharacteristc")
    console.log(findCharacteristc)
     if(findCharacteristc) {
      const filterCharacteristc = characteristcs.filter((item) => item.item !== dado);
      console.log("filterCharacteristc")
      console.log(filterCharacteristc)
      setCharacteristcs(filterCharacteristc);
      return;
     } 


        const data = {
            id: uuidv4(),
            item: dado
        }

        console.log(data)
        setCharacteristcs([...characteristcs, data])
    }
    function handleDeleteImage(dado) {
    const findImages = images.find(item => item.link === dado);
    console.log("findImages")
    console.log(findImages)
     if(findImages) {
      const filterImages = images.filter((item) => item.link !== dado);
      console.log("filterImages")
      console.log(filterImages)
      setImages(filterImages);
      setFeaturedImage(images[0].link)
      console.log(images[0].link)
      return;
     } 
    }
console.log(featuredImage)

    
    return (
        <div className="NewProperty">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Novo imóvel</h3>
                <div className="form">
                    <input type="text" placeholder="Título"/>
                    {/* <input type="text" placeholder="Endereço"/> */}
                    <div className="data">
                    <input type="text" placeholder="Rua"/>
                    <input type="text" placeholder="Bairro"/>
                    <select>
                        <option value="">Selecione seu estado</option>
                    </select>
                    <select>
                        <option value="">Selecione sua cidade</option>
                    </select>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descrição"></textarea>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select name="" id="">
                        <option value="">Subtipo</option>
                        <option value="">Casa</option>
                        <option value="">Apartamento</option>
                    </select>
                    <select name="" id="">
                        <option value="">Estado</option>
                        <option value="">Alugel</option>
                        <option value="">Venda</option>
                        <option value="">Temporada</option>
                    </select>
                    <select name="" id="">
                        <option value="">Disponibilidade</option>
                        <option value="">Disponível</option>
                        <option value="">Insponível</option>
                    </select>
                    </div>
                    <div className="data">
                    <select name="" id="">
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
                    <select name="" id="">
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
                    <select name="" id="">
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
                    <select name="" id="">
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
                    <input type="text" placeholder="Preço Venda"/>
                    <input type="text" placeholder="Preço Aluguel"/>
                    <select name="" id="">
                        <option value="">Diário</option>
                        <option value="">Semanal</option>
                        <option value="">Mensal</option>
                        <option value="">Trimestral</option>
                        <option value="">Semestral</option>
                        <option value="">Anual</option>
                    </select>
                    </div>
                    <div className="data">
                    <input type="text" placeholder="Preço Condimínio"/>
                    <input type="text" placeholder="Preço IPTU"/>
                    <input type="text" placeholder="Preço Outros encargos"/>
                    </div>
                    <div className="data">
                    <input type="text" placeholder="Área total"/>
                    <select name="" id="">
                        <option value="">M2</option>
                        <option value="">Km</option>
                        <option value="">Eq</option>
                    </select>
                    <input type="text" placeholder="Área de construção"/>
                    <select name="" id="">
                        <option value="">M2</option>
                        <option value="">Km</option>
                        <option value="">Eq</option>
                    </select>
                    </div>

                    </div>

                    <div className="form">
                        <div className="Check">
                        <button onClick={() => handleNewCharacteristcs("Imóvel novo")}>Imóvel novo</button>
                        <button onClick={() => handleNewCharacteristcs("1º Locação")}>1º Locação</button>
                        <button onClick={() => handleNewCharacteristcs("Sacada")}>Sacada</button>
                        <button onClick={() => handleNewCharacteristcs("Piscina")}>Piscina</button>
                        <button onClick={() => handleNewCharacteristcs("Churrasqueira")}>Churrasqueira</button>
                        <button onClick={() => handleNewCharacteristcs("2 Ambientes")}>2 Ambientes</button>
                        <button onClick={() => handleNewCharacteristcs("Jardim")}>Jardim</button>
                        <button onClick={() => handleNewCharacteristcs("Wifi")}>Wifi</button>
                        <button onClick={() => handleNewCharacteristcs("Lavanderia")}>Lavanderia</button>
                        <button onClick={() => handleNewCharacteristcs("Elevador")}>Elevador</button>
                        <button onClick={() => handleNewCharacteristcs("Banheiro Social")}>Banheiro Social</button>
                        <button onClick={() => handleNewCharacteristcs("Área de lazer")}>Área de lazer</button>
                        <button onClick={() => handleNewCharacteristcs("Próx. Escola")}>Próx. Escola</button>
                        <button onClick={() => handleNewCharacteristcs("Próx. Ponto de Ônibus")}>Próx. Ponto de Ônibus</button>
                        <button onClick={() => handleNewCharacteristcs("Próx. Farmácia")}>Próx. Farmácia</button>
                        <button onClick={() => handleNewCharacteristcs("Próx. Centro")}>Próx. Centro</button>
                        <button onClick={() => handleNewCharacteristcs("Próx. Supermercado")}>Próx. Supermercado</button>
                        <button onClick={() => handleNewCharacteristcs("Próx. Padaria")}>Próx. Padaria</button>
                        <button onClick={() => handleNewCharacteristcs("Prox. Pracinha")}>Prox. Pracinha</button>
                        <button onClick={() => handleNewCharacteristcs("Área Externa")}>Área Externa</button>
                        <button onClick={() => handleNewCharacteristcs("Entrada independente")}>Entrada independente</button>
                        <button onClick={() => handleNewCharacteristcs("Ciclovia")}>Ciclovia</button>
                        <button onClick={() => handleNewCharacteristcs("Closet")}>Closet</button>
                        <button onClick={() => handleNewCharacteristcs("Cozinha Ampla")}>Cozinha Ampla</button>
                        <button onClick={() => handleNewCharacteristcs("Sistema de Segurança")}>Sistema de Segurança</button>
                        <button onClick={() => handleNewCharacteristcs("Sala de Estar")}>Sala de Estar</button>
                        <button onClick={() => handleNewCharacteristcs("Sala de Jogos")}>Sala de Jogos</button>
                        <button onClick={() => handleNewCharacteristcs("Portão Eletrônico")}>Portão Eletrônico</button>
                        <button onClick={() => handleNewCharacteristcs("Terraço")}>Terraço</button>
                        <button onClick={() => handleNewCharacteristcs("Energia Solar")}>Energia Solar</button>
                        <button onClick={() => handleNewCharacteristcs("Parquinho")}>Parquinho</button>
                        <button onClick={() => handleNewCharacteristcs("Aceita Pets")}>Aceita Pets</button>
                        <button onClick={() => handleNewCharacteristcs("Possúi poço")}>Possúi poço</button>

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
                    <div className="form">
                    <div className="data">
                    <select name="" id="">
                        <option value="">Vídeo</option>
                        <option value="">Youtube</option>
                        <option value="">Vímeo</option>
                    </select>
                    <input type="text" placeholder="Link Vídeo"/>
                    </div>
                    </div>
                    <div className="form">
                    <div className="data">
                    <select name="" id="">
                        <option value="">Slide inicial? (Apenas no site individual)</option>
                        <option value="">Sim</option>
                        <option value="">Não</option>
                    </select>
                    <select name="" id="">
                        <option value="">Aceita financiamento?</option>
                        <option value="">Sim</option>
                        <option value="">Não</option>
                    </select>
                    
                    </div>
                    </div>
                    <button className="btnSend">Cadastrar anúncio</button>
            </div>
        </div>
    )
}