import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as CountryActions from '../../store/modules/country/actions';

import { Container } from './styles';
import { FaChevronLeft } from 'react-icons/fa';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function Details(props) {
  const dispatch = useDispatch();

  let filterCountry = useSelector(state => state.country.filter(c => (
    c._id === props.match.params.id ? c : null
  )));

  const [country, setCountry] = useState(filterCountry);


  const handleSave = (e) => {
    e.preventDefault();

    //const bandeira = document.getElementById('bandeira').value;
    const nome = document.getElementById('nome').value;
    const capital = document.getElementById('capital').value;
    const area = document.getElementById('area').value;
    const populacao = document.getElementById('populacao').value;
    const topleveldomain = document.getElementById('topleveldomain').value;

    //filterCountry[0].flag.emoji = bandeira;
    filterCountry[0].name = nome;
    filterCountry[0].capital = capital;
    filterCountry[0].area = area;
    filterCountry[0].population = populacao;
    filterCountry[0].topLevelDomains[0].name = topleveldomain;

    setCountry(filterCountry);

    dispatch(CountryActions.updateCountryRequest(country));
  }

  return (
    <>
      <div style={{ padding: 10 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <FaChevronLeft size={30} color="#7159c1" style={{ margin: '10px' }} />
        </Link>
      </div>
      <h1 style={{ margin: 30 }}>Detalhes</h1>
      <Container>
        {
          country.map(item => (
            <>
              <img src={item.flag ? item.flag.svgFile : null} alt={item.name} />
              <form onSubmit={handleSave}>
                <h1>Dados</h1>
                <p>
                  <strong>Bandeira:</strong>
                  <input id="bandeira" type="text" defaultValue={item.flag.emoji} readOnly style={{ background: '#9999' }} />
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
                <p>
                  <strong>Distância para outros países</strong>
                  <div>
                    <div>
                      {
                        item.distanceToOtherCountries.map(distance => (
                          <span>{distance.countryName} - KM: {distance.distanceInKm}</span>
                        ))
                      }
                    </div>
                  </div>
                </p>
                <button type="submit">Salvar informações</button>
              </form>
            </>
          ))
        }
      </Container>
      <h1 style={{ textAlign: 'center' }}>Mapa</h1>
      <div style={{ height: '600px' }}>
        {country[0].location.latitude !== undefined ? (
          <Map
            google={props.google} zoom={4}
            style={{ width: '97%', height: '100%' }}
            centerAroundCurrentLocation={false}
            initialCenter={{ lat: country[0].location.latitude, lng: country[0].location.longitude }}

          >
            <Marker
              key={country[0]._id}
              name={country[0].name}
              position={{ lat: country[0].location.latitude, lng: country[0].location.longitude }}
              title={country[0].name}
            />

            {/* {country[0].topLevelDomains.map(topMapa => (
              <Marker
                key={topMapa.countries.name}
                name={topMapa.countries.name}
                position={{ lat: topMapa.countries.location.latitude, lng: topMapa.countries.location.longitude }}
                title={topMapa.countries.name}
              />
            ))} */}
          </Map>
        ) : (
            <h1>Aguarde</h1>
          )}
      </div>
    </>
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoYxORduKEe4Boi5gW12nS1sB2k_JLv_o',
  coordinates: true,
})(Details)