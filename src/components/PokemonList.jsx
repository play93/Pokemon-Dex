//모든 포켓몬을 리스트로 보여주는 컴포넌트입니다.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const ListWrap = styled.ul`
  max-width: 1000px;
  display: grid;
  padding: 20px;
  margin: auto;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  background-color: #ebebeb;
  border-radius: 10px;
`;

const ListItem = styled.li`
  background: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 15px;
`;

const PokemonNum = styled.p`
  font-size: 14px;
  color: #888;
  margin: 10px 0;
`;

const AddBtn = styled.button`
  background-color: green;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
`;

function PokemonList({ selectedPokemon, setSelectedPokemon }) {
  const navigate = useNavigate();
  const pokemonList = MOCK_DATA;

  return (
    <section>
      <ListWrap>
        {pokemonList.map(function (pokemon) {
          return (
            <ListItem
              key={pokemon.id}
              onClick={() => navigate("/pokemon-detail" + `?id=${pokemon.id}`)}
            >
              <img src={pokemon.img_url} />
              <h3>{pokemon.korean_name}</h3>
              <PokemonNum>No. {pokemon.id}</PokemonNum>
              <AddBtn>추가</AddBtn>
            </ListItem>
          );
        })}
      </ListWrap>
    </section>
  );
}

export default PokemonList;
