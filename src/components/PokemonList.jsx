import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.ul`
  max-width: 1000px;
  display: grid;
  padding: 20px;
  margin: auto;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  background-color: #ebebeb;
  border-radius: 10px;
`;

function PokemonList({ pokemonList, onRemovePokemon }) {
  const navigate = useNavigate();

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onRemove={onRemovePokemon}
            isSelected={false} // isSelected={isSelected}로 설정하면 alert창이 뜨지 않지만 리스트에서도 버튼 색만 보고 이미 추가를 했는지 추가를 안했는지 알 수 있음
            navigate={navigate}
          />
        );
      })}
    </ListContainer>
  );
}

export default PokemonList;
