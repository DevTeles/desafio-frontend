import React from 'react';
import { render, wait } from '@testing-library/react';

import ListCountry from '../components/ListCountry';

import gql from 'graphql-tag'
//import { Router } from 'react-router-dom';
//import { graphql } from 'react-apollo'

import { MockedProvider } from '@apollo/react-testing';
//import { createMemoryHistory } from 'history';


describe('Testes do Projeto', () => {
  it('ListCountry', async () => {
    const query = gql`
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
    `
    const mocks = [
      {
        request: { query },
        result: { data: { country: 'Brazil' } }
      }
    ]
    //const fakeHistory = createMemoryHistory();

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListCountry />
      </MockedProvider>
    )

    const fieldSearch = await wait(
      () => getByTestId('search')
    )

    console.log('AQUI' + fieldSearch);

    expect(1).toBe(1);

  });



});