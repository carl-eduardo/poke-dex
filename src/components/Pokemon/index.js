import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { darken } from 'polished';
import api from '../../services/api';

function Pokemon({ poke }) {
  const [pokeImg, setPokeImg] = useState([]);
  useEffect(() => {
    async function getPokeDetails() {
      const response = await api.get(`pokemon/${poke.name}`);
      setPokeImg(response.data.sprites.front_default);
    }

    getPokeDetails();
  }, []);

  return (
    <Poke>
      <img src={pokeImg} alt={poke.name} />
      {poke.name}
      <PokeButton to={`/details/${encodeURIComponent(poke.name)}`}>
        Detalhes
      </PokeButton>
    </Poke>
  );
}

const Poke = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 33.333%;
  word-wrap: break-word;
  box-sizing: border-box;
  border: 1px solid #ff7373;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #ff7373;
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
`;

const PokeButton = styled(Link)`
  background: #30a7d7;
  border: 0;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  transition: background 0.2s;
  text-decoration: none;
  margin-left: 3px;
  cursor: pointer;
  border-radius: 2px 2px 10px 2px;
  color: white;
  &:hover {
    background: ${darken(0.03, '#30a7d7')};
  }
`;

export default Pokemon;
