import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ListCountry from '../../components/ListCountry/index';

import { Container, Header, Footer, Input } from './styles';
import GitHub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.jpeg';

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = async event => {
    event.preventDefault();

    if (event.keyCode === 13) {
      setSearch(event.target.value.trim());
    }
  }

  return (
    <>
      <Container>
        <Header>
          <div>
            <Input
              data-testid="search"
              style={{ fontSize: 26 }}
              onKeyUp={(e) => handleSearch(e)}
              placeholder="Search"
              type="text"
              name="search"
            />
            <FaSearch color="#FFF" size={32} />
          </div>
        </Header>
        <ListCountry search={search} />
      </Container >

      <Footer>
        <a href="https://github.com/DevTeles" target="_blank" without rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-teles-vital-9002946a/" target="_blank" without rel="noopener noreferrer" >
          <img src={Linkedin} alt="GitHub" />
        </a>
      </Footer>
    </>
  );
}