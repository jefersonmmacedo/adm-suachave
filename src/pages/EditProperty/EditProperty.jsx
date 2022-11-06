import NavbarAdm from "../../components/Nav/Navbar"
import { ToolBar } from "../../components/ToolBar/ToolBar"
import "./editProperty.css"

export function EditProperty() {
    return (
        <div className="EditProperty">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Editar imóvel</h3>
                <div className="form">
                    <input type="text" placeholder="Título"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descrição"></textarea>
                    <div className="data">
                    <input type="text" placeholder="Rua"/>
                    <input type="text" placeholder="Bairro"/>
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="Estado"/>
                    </div>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Tipo</option>
                        <option value="">Residencial</option>
                        <option value="">Comercial</option>
                    </select>
                    <select name="" id="">
                        <option value="">Subtipo</option>
                        <option value="">Casa</option>
                        <option value="">Apartamento</option>
                    </select>
                    </div>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Status</option>
                        <option value="">Alugel</option>
                        <option value="">Venda</option>
                        <option value="">Temporada</option>
                    </select>
                    <input type="text" placeholder="Preço"/>
                    <input type="text" placeholder="Texto após preço"/>
                    </div>
                    <div className="data">
                    <select name="" id="">
                        <option value="">Quartos</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <select name="" id="">
                        <option value="">Suítes</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <select name="" id="">
                        <option value="">Banheiros</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <select name="" id="">
                        <option value="">Garagem</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    </div>
                    </div>

                    <div className="form">
                        <div className="Check">
                        <button>Sacada</button>
                        <button>Piscina</button>
                        <button>Churrasqueira</button>
                        <button>2 Ambientes</button>
                        <button>Sala de Estar</button>
                        <button>Jardim</button>
                        <button>Lavanderia</button>
                        <button>Banheiro Social</button>
                        <button>Elevador</button>
                        <button>Área de lazer</button>
                        <button>Próx. Escola</button>
                        <button>Próx. Ponto de Ônibus</button>
                        <button>Próx. Farmácia</button>
                        <button>Próx. Centro</button>
                        <button>Próx. Supermercado</button>
                        <button>Área Externa</button>
                        <button>Cozinha Ampla</button>

                        <button>Sala de Jogos</button>
                        <button>Salão de Jogos</button>
                        <button>Sacada</button>
                    </div>
                    </div>
                    <div className="form">
                        <label>Adicionar imagens</label>
                        <input type="file" name="" id="" />
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
                        <option value="">Slide inicial?</option>
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
            </div>
        </div>
    )
}