//선택된 포켓몬을 보여주는 컴포넌트입니다.
import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const DashboardContainer = styled.div`
  max-width: 1000px;
  padding: 20px;
  margin: 20px auto;
  background-color: aliceblue;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;
const NoPokemonText = styled.p`
  text-align: center;
`;
const SelectPokemonBox = styled.ul`
  display: grid;
  margin: auto;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

function Dashboard({ onAddPokemon, onRemovePokemon, selectedPokemon }) {
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <div>
        {selectedPokemon.length === 0 ? (
          <NoPokemonText>선택된 포켓몬이 없습니다.</NoPokemonText>
        ) : (
          <SelectPokemonBox>
            {selectedPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onAdd={onAddPokemon}
                onRemove={onRemovePokemon}
                isSelected={true} // 현재 포켓몬이 선택된 상태인지 확인하여 전달
                navigate={navigate} // 포켓몬 상세페이지로 이동하기 위해 navigate 함수 전달
              />
            ))}
          </SelectPokemonBox>
        )}
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
