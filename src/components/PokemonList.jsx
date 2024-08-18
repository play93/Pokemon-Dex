//모든 포켓몬을 리스트로 보여주는 컴포넌트입니다.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../mock";

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

function PokemonList({
  pokemonList,
  onAddPokemon,
  onRemovePokemon,
  selectedPokemon,
}) {
  const navigate = useNavigate();

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => {
        const isSelected = selectedPokemon.some((p) => p.id === pokemon.id);

        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={onAddPokemon}
            onRemove={onRemovePokemon}
            isSelected={isSelected} // 현재 포켓몬이 선택된 상태인지 확인하여 전달
            navigate={navigate} // 포켓몬 상세페이지로 이동하기 위해 navigate 함수 전달
          />
        );
      })}
    </ListContainer>
  );
}

export default PokemonList;
