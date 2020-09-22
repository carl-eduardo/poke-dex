import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pokemon from '../../components/Pokemon';
import api from '../../services/api';

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokes() {
      const response = await api.get('pokemon?limit=100');
      setPokemons(response.data.results);
    }
    getPokes();
  }, []);

  return (
    <Container>
      {pokemons.map((pokemon) => (
        <Pokemon poke={pokemon} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Home;
