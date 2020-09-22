import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import api from '../../services/api';

function Details({ match }) {
  const { pokemon } = match.params;
  const [pokemonPics, setPokemonPics] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  useEffect(() => {
    async function getPokeDetails() {
      const response = await api.get(`pokemon/${pokemon}`);
      setPokemonPics(response.data.sprites);
      setPokemonDetails(response.data);
      console.log(response.data);
    }

    getPokeDetails();
  }, []);
  return (
    <Container>
      <ContTemplate>
        <Pokemon>
          <img
            src={
              !pokemonDetails.sprites
                ? ''
                : pokemonDetails.sprites.front_default
            }
            alt={pokemonDetails.name}
          />
          <img
            src={
              !pokemonDetails.sprites ? '' : pokemonDetails.sprites.back_default
            }
            alt={pokemonDetails.name}
          />
        </Pokemon>

        <h2>{pokemonDetails.name}</h2>
        <h4>Infos:</h4>
        <Infos>
          <p>Exp Base: {pokemonDetails.base_experience}</p>
          <p>
            Vida:{' '}
            {!pokemonDetails.stats ? 0 : pokemonDetails.stats[0].base_stat}
          </p>
          <p>
            Ataque:{' '}
            {!pokemonDetails.stats ? 0 : pokemonDetails.stats[1].base_stat}
          </p>
          <p>
            Defesa:{' '}
            {!pokemonDetails.stats ? 0 : pokemonDetails.stats[2].base_stat}
          </p>
          <p>
            Velocidade:{' '}
            {!pokemonDetails.stats ? 0 : pokemonDetails.stats[5].base_stat}
          </p>
        </Infos>
        <h4>Tipos:</h4>
        <Infos>
          <p className="types">
            {!pokemonDetails.types ? 'None' : pokemonDetails.types[0].type.name}
          </p>
          <p className="types">
            {!pokemonDetails.types
              ? 'None'
              : !pokemonDetails.types[1]
              ? null
              : pokemonDetails.types[1].type.name}
          </p>
        </Infos>
        <h4>Habilidades:</h4>
        <Infos>
          <p className="abilities">
            {!pokemonDetails.abilities
              ? 'None'
              : pokemonDetails.abilities[0].ability.name}
          </p>
          <p className="abilities">
            {!pokemonDetails.abilities
              ? 'None'
              : !pokemonDetails.abilities[1]
              ? ''
              : pokemonDetails.abilities[1].ability.name}
          </p>
        </Infos>
      </ContTemplate>
      <PokeButton to="/">Voltar ao inicio</PokeButton>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  min-width: 100%;
  background: #fff;
  display: grid;
  justify-items: center;
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  border-radius: 10px;
`;

const ContTemplate = styled.div`
  grid-template-rows: 1fr;
`;

const Pokemon = styled.div`
  padding: 10px;
  width: 700px;
  display: flex;
  justify-content: center;
`;

const Infos = styled.div`
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px 5px 20px 5px;
  width: 700px;
  margin-bottom: 10px;

  .types {
    background: grey;
    color: white;
    border-radius: 2px 2px 10px 2px;
    padding: 5px;
    margin-bottom: 4px;
  }

  .abilities {
    background: green;
    color: white;
    border-radius: 2px 2px 10px 2px;
    padding: 5px;
    margin-bottom: 4px;
  }
`;

const PokeButton = styled(Link)`
  background: #30a7d7;
  border: 0;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  transition: background 0.2s;
  text-decoration: none;
  margin-bottom: 10px;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  &:hover {
    background: ${darken(0.03, '#30a7d7')};
  }
`;

export default Details;
