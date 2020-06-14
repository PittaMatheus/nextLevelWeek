import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet'
import api from '../../services/api'




import './styles.css'
import logo from '../../assets/logo.svg';

interface Item {
  id:number;
  title:string;
  image_url: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);


  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    })
  }, [])



  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>
      <form action="">
        <h1>Cadastro do <br />ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da Entidade</label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o Endereço no mapa</span>
          </legend>

          <Map center={[-23.5427939, -46.2137752]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-23.5427939, -46.2137752]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado(UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>


          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
          <ul className="items-grid">
            {items.map(i=> (
            <li key={i.id}>
              <img src={i.image_url} alt={i.alt} />
              <span>{i.title}</span>
            </li>
            ))}
          </ul>
        </fieldset>
        <button type="submit">
          Cadastrar Ponto de coleta
        </button>
      </form>
    </div>
  )
}

export default CreatePoint;