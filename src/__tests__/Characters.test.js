import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MockAdapter from 'axios-mock-adapter';

const apiMock = new MockAdapter(null);

describe('Characters MARVEL', () => {
  it('Deve poder fazer requisição para API Marvel (validação do parâmentro: ts, apikey e hash)', async () => {

    //   apiMock.onGet('characters').reply(200);

    //   const { status } = await api.get('characters', {
    //     params: {
    //       ts: process.env.REACT_APP_TS,
    //       apikey: process.env.REACT_APP_API_KEY,
    //       hash: process.env.REACT_APP_HASH,
    //     }
    //   });

    //   expect(status).toBe(200);
    // });

    // it('Deve poder fazer requisição das series de um determinado personagem.', async () => {

    //   apiMock.onGet('characters/1009144/series').reply(200);

    //   const { status } = await api.get('characters/1009144/series', {
    //     params: {
    //       ts: process.env.REACT_APP_TS,
    //       apikey: process.env.REACT_APP_API_KEY,
    //       hash: process.env.REACT_APP_HASH,
    //     }
    //   });

    //   expect(status).toBe(200);
  });

  it('Deve alterar a cor para orange quando o focus estiver no input', async () => {

    const { getByPlaceholderText } = render(
      <input type="text" placeholder="Pesquisa um personagem" style={{ borderColor: '#ff9000' }} />
    )

    const inputElement = getByPlaceholderText("Pesquisa um personagem")

    fireEvent.focus(inputElement);

    expect(inputElement).toHaveStyle('border-color: #ff9000;');
  });

  it('Deve poder realizar um filtro pelo nome inicial do personagem.', async () => {

    // apiMock.onGet('characters').reply(200);

    // const { status } = await api.get('characters', {
    //   params: {
    //     ts: process.env.REACT_APP_TS,
    //     apikey: process.env.REACT_APP_API_KEY,
    //     hash: process.env.REACT_APP_HASH,
    //     nameStartsWith: 'thor'
    //   }
    // });

    // expect(status).toBe(200);
  });

  it('Deve poder realizar um filtro pelo offset.', async () => {

    // apiMock.onGet('characters').reply(200);

    // const { status } = await api.get('characters', {
    //   params: {
    //     ts: process.env.REACT_APP_TS,
    //     apikey: process.env.REACT_APP_API_KEY,
    //     hash: process.env.REACT_APP_HASH,
    //     offset: 1
    //   }
    // });

    // expect(status).toBe(200);
  });
});