import React from "react";
import { useSelector } from 'react-redux';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles';
import { FaChevronLeft } from 'react-icons/fa';

export default function Series({ match }) {

  const country = useSelector(state => state.country);
  console.log(country);

  return (
    <>
      <div style={{ padding: 10 }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <FaChevronLeft size={30} color="#7159c1" style={{ margin: '10px' }} />
        </a>
      </div>
      <h1 style={{ margin: 30 }}>Detalhes de {match.params.name}</h1>
      <Container>
        {
          country.map(item => (
            <>
              <img src={item.flag ? item.flag.svgFile : null} alt={item.name} />
              <div>
                <p><strong>Bandeira:</strong> {item.flag.emoji}</p>
                <p><strong>Nome:</strong> {item.name}</p>
                <p><strong>Capital:</strong> {item.capital}</p>
                <p><strong>Área:</strong> {item.area} km²</p>
                <p><strong>População:</strong> {item.population}</p>
                {
                  item.topLevelDomains.map(top => (
                    <p><strong>Top level domain:</strong> {top.name}</p>
                  ))
                }
              </div>
            </>
          ))
        }
      </Container>
    </>
  );
}
