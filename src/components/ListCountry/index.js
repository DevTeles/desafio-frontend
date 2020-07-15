import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { useDispatch } from 'react-redux';
import * as CountryActions from '../../store/modules/country/actions';

import { Container } from './styles';

function ListCountry({ result, search }) {
  const [countrys, setCountry] = useState([]);
  const dispatch = useDispatch();

  function handleAddCountry(country) {
    console.tron.warn(country);
    dispatch(CountryActions.addToCountryRequest(country));
  }

  useEffect(() => {
    if (search) {
      setCountry(result.Country.filter(item =>
        (item.name.toLowerCase() === search.toLowerCase())
        || (item.nativeName.toLowerCase() === search.toLowerCase()))
      );
    }
    else if (result.Country) {
      setCountry(result.Country)
    }
  }, [search, result.Country]);

  const renderCountry = () => (
    <Container>
      {
        countrys.map(country => (
          <li key={country._id}>
            <Link onClick={() => handleAddCountry(country)} to={`/details/${country.name}`} style={{ textDecoration: 'none', padding: 0, margin: 0 }} >
              <img src={country.flag.svgFile} alt={country.name} />
              <div>
                <p>{country.name}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </Link>
          </li>
        ))
      }
    </Container >
  )

  return (
    <>
      {result.loading
        ? <div style={{ height: 200, textAlign: 'center', display: 'flex', placeItems: 'center', placeContent: 'center' }}>
          <h1 style={{ fontSize: 55 }}>Carregando...</h1>
        </div>
        : renderCountry()
      }
    </>
  );
}

const countryQuery = gql`
  query {
    Country {
      _id
      name
      nativeName
      capital 
      area
      population
      flag {       
        svgFile
        emoji
      } 
      topLevelDomains {
        name
      }  
      distanceToOtherCountries(first: 5) {
        distanceInKm
        countryName      
      } 
    }   
  }
`;


export default graphql(countryQuery, {
  name: 'result'
})
  (ListCountry);