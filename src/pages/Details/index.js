import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as CountryActions from '../../store/modules/country/actions';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles';
import { FaChevronLeft } from 'react-icons/fa';

export default function Series({ match }) {
  const dispatch = useDispatch();
  const country = useSelector(state => state.country);

  console.log(country);

  const handleSave = (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const bandeira = document.getElementById('bandeira').value;
    const nome = document.getElementById('nome').value;
    const capital = document.getElementById('capital').value;
    const area = document.getElementById('area').value;
    const populacao = document.getElementById('populacao').value;
    const topleveldomain = document.getElementById('topleveldomain').value;

    const data = {
      bandeira, nome, capital, area, populacao, topleveldomain
    }

    console.log(data);

    //dispatch(CountryActions.addToCountryRequest(id, data));
  }

  return (
    <>
      <div style={{ padding: 10 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <FaChevronLeft size={30} color="#7159c1" style={{ margin: '10px' }} />
        </Link>
      </div>
      <h1 style={{ margin: 30 }}>Detalhes de {match.params.name}</h1>
      <Container>
        {
          country.map(item => (
            <>
              <img src={item.flag ? item.flag.svgFile : null} alt={item.name} />
              <form onSubmit={handleSave}>
                <h1>Dados</h1>
                <p>
                  <strong>Bandeira:</strong>
                  <input id="bandeira" type="text" defaultValue={item.flag.emoji} />
                  <input id="id" type="text" hidden defaultValue={item._id} />
                </p>
                <p>
                  <strong>Nome:</strong>
                  <input id="nome" type="text" defaultValue={item.name} />
                </p>
                <p>
                  <strong>Capital:</strong>
                  <input id="capital" type="text" defaultValue={item.capital} />
                </p>
                <p>
                  <strong>Área:</strong>
                  <input id="area" type="text" defaultValue={item.area + " km²"} />
                </p>
                <p>
                  <strong>População:</strong>
                  <input id="populacao" type="text" defaultValue={item.population} />
                </p>
                {
                  item.topLevelDomains.map(top => (
                    <p>
                      <strong>Top level domain:</strong>
                      <input id="topleveldomain" type="text" defaultValue={top.name} />
                    </p>
                  ))
                }
                <button type="submit">Salvar informações</button>
              </form>
            </>
          ))
        }
      </Container>
    </>
  );
}
